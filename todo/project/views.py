from rest_framework.viewsets import ModelViewSet
from users.views import TodoLimitOffsetPagination

from project.models import Project, Todo
from project.serializers import ProjectModelSerializer, TodoModelSerializer

# Create your views here.


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = TodoLimitOffsetPagination


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = TodoLimitOffsetPagination








