from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination

from rest_framework.response import Response
from rest_framework import status

from project.models import Project, Todo
from project.serializers import ProjectModelSerializer, TodoModelSerializer
from .filters import ProjectFilter, TodoFilter


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = TodoLimitOffsetPagination
    filterset_class = TodoFilter

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()



