from rest_framework.viewsets import GenericViewSet
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView
from rest_framework.pagination import LimitOffsetPagination
from users.models import User
from users.serializers import UserModelSerializer

# Create your views here.


class UserLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 3


class UserCustomViewSet(ListAPIView, RetrieveAPIView, UpdateAPIView, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    pagination_class = UserLimitOffsetPagination

