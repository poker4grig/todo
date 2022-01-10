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
        username = graphene.String()
        last_name = graphene.String()
        first_name = graphene.String()
        email = graphene.String()
        is_stuff = graphene.Boolean()
        is_active = graphene.Boolean()
        id = graphene.ID()

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, username, first_name, last_name, email, is_stuff, is_active, id):
        user = User.objects.get(id=id)
        user.username = username
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.is_stuff = is_stuff
        user.is_active = is_active
        user.save()
        return UserUpdateMutation(user=user)


class UserCreateMutation(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        first_name = graphene.String(required=False)
        last_name = graphene.String(required=False)
        email = graphene.String(required=True)
        is_stuff = graphene.Boolean(required=False)
        is_active = graphene.Boolean(required=False)

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, username, first_name, last_name, email, is_stuff, is_active):
        user = User.objects.create(username=username, first_name=first_name, last_name=last_name, email=email,
                                   is_stuff=is_stuff, is_active=is_active)
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


class ProjectUpdateMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        user = graphene.List(graphene.Int)
        repo = graphene.String()
        id = graphene.ID()

    project = graphene.Field(ProjectType)

    @classmethod
    def mutate(cls, root, info, name, user, repo, id):
        project = Project.objects.get(id=id)
        project.name = name
        project.user.set([*user])
        project.repo = repo
        return ProjectUpdateMutation(project=project)


class ProjectCreateMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        user = graphene.List(graphene.Int)
        repo = graphene.String()

    project = graphene.Field(ProjectType)

    @classmethod
    def mutate(cls, root, info, name, user, repo):
        project = Project.objects.create(name=name, repo=repo)
        project.user.set([*user])
        return ProjectCreateMutation(project=project)


class ProjectDeleteMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    project = graphene.List(ProjectType)

    @classmethod
    def mutate(cls, root, info, id):
        Project.objects.get(id=id).delete()
        project = Project.objects.all()
        return ProjectDeleteMutation(project=project)


class TodoUpdateMutation(graphene.Mutation):
    class Arguments:
        user = graphene.Int(required=True)
        project = graphene.Int(required=True)
        text = graphene.String()
        is_active = graphene.Boolean()
        id = graphene.ID()

    todo = graphene.Field(TodoType)

    @classmethod
    def mutate(cls, root, info, user, project, text, is_active, id):
        user = User.objects.get(id=user)
        project = Project.objects.get(id=project)
        todo = Todo.objects.get(id=id)
        todo.user = user
        todo.project = project
        todo.text = text
        todo.is_active = is_active
        return TodoUpdateMutation(todo=todo)


class TodoCreateMutation(graphene.Mutation):
    class Arguments:
        user = graphene.Int(required=True)
        project = graphene.Int(required=True)
        text = graphene.String()
        is_active = graphene.Boolean()

    todo = graphene.Field(TodoType)

    @classmethod
    def mutate(cls, root, info, user, project, text, is_active):
        user = User.objects.get(id=user)
        project = Project.objects.get(id=project)
        todo = Todo.objects.create(user=user, project=project, text=text, is_active=is_active)
        return TodoCreateMutation(todo=todo)


class TodoDeleteMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    todo = graphene.List(TodoType)

    @classmethod
    def mutate(cls, root, info, id):
        Todo.objects.get(id=id).delete()
        todo = Todo.objects.all()
        return TodoDeleteMutation(todo=todo)


class Mutation(ObjectType):
    update_user = UserUpdateMutation.Field()
    create_user = UserCreateMutation.Field()
    delete_user = UserDeleteMutation.Field()
    update_project = ProjectUpdateMutation.Field()
    create_project = ProjectCreateMutation.Field()
    delete_project = ProjectDeleteMutation.Field()
    update_todo = TodoUpdateMutation.Field()
    create_todo = TodoCreateMutation.Field()
    delete_todo = TodoDeleteMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
