import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType
from users.models import User
from project.models import Project, Todo


class UserType(DjangoObjectType):

    class Meta:
        model = User
        fields = '__all__'


class ProjectType(DjangoObjectType):

    class Meta:
        model = Project
        fields = '__all__'


class TodoType(DjangoObjectType):

    class Meta:
        model = Todo
        fields = '__all__'


class Query(ObjectType):

    all_users = graphene.List(UserType)
    all_projects = graphene.List(ProjectType)
    all_todoes = graphene.List(TodoType)

    user_by_id = graphene.Field(UserType, id=graphene.Int(required=False))
    project_by_id = graphene.Field(ProjectType, id=graphene.Int(required=False))
    todo_by_id = graphene.Field(TodoType, id=graphene.Int(required=False))

    project_by_username = graphene.List(ProjectType, username=graphene.String(required=False))
    todo_by_project_name = graphene.List(TodoType, name=graphene.String(required=False))
    todo_by_username = graphene.List(TodoType, username=graphene.String(required=False))

    def resolve_project_by_username(root, info, username=None):
        return Project.objects.filter(user__username=username)

    def resolve_todo_by_project_name(root, info, name=None):
        return Todo.objects.filter(project__name=name)

    def resolve_todo_by_username(root, info, username=None):
        return Todo.objects.filter(user__username=username)

    def resolve_user_by_id(root, info, id=None):
        try:
            return User.objects.get(id=id)
        except User.DoesNotExist:
            return None

    def resolve_project_by_id(root, info, id=None):
        try:
            return Project.objects.get(id=id)
        except Project.DoesNotExist:
            return None

    def resolve_todo_by_id(root, info, id=None):
        try:
            return Todo.objects.get(id=id)
        except Todo.DoesNotExist:
            return None

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_todoes(root, info):
        return Todo.objects.all()


class UserUpdateMutation(graphene.Mutation):
    class Arguments:
        last_name = graphene.String(required=True)
        first_name = graphene.String(required=True)
        id = graphene.ID()

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, last_name, first_name, id):
        user = User.objects.get(id=id)
        user.last_name = last_name
        user.first_name = first_name
        user.save()
        return UserUpdateMutation(user=user)


class UserCreateMutation(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, username, first_name, last_name, email):
        user = User.objects.create(username=username, first_name=first_name, last_name=last_name, email=email)
        return UserCreateMutation(user=user)


class UserDeleteMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    user = graphene.List(UserType)

    @classmethod
    def mutate(cls, root, info, id):
        User.objects.get(id=id).delete()
        user = User.objects.all()
        return UserDeleteMutation(user=user)


class Mutation(ObjectType):
    update_user = UserUpdateMutation.Field()
    create_user = UserCreateMutation.Field()
    delete_user = UserDeleteMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
