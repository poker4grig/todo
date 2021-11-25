from djangorestframework_camel_case.util import underscoreize
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from users.models import User
from project.models import Project, Todo
from users.serializers import UserModelSerializer


class ProjectModelSerializer(ModelSerializer):
    user = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):
    user = UserModelSerializer()

    class Meta:
        model = Todo
        fields = '__all__'


