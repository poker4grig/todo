from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from users.models import User
from users.serializers import UserModelSerializer

# Create your views here.


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 3


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    pagination_class = TodoLimitOffsetPagination




