from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, BasePermission
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.pagination import LimitOffsetPagination
from users.models import User
from users.serializers import UserModelSerializer, UserModelSerializerVersionTwo


# Create your views here.


class StaffOnly(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_staff


class UserLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


# class UserCustomViewSet(ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, GenericViewSet):
class UserCustomViewSet(ModelViewSet):
    # permission_classes = [StaffOnly]
    queryset = User.objects.all()

    # serializer_class = UserModelSerializer
    # pagination_class = UserLimitOffsetPagination

    def get_serializer_class(self):
        if self.request.version == 'v2':
            return UserModelSerializerVersionTwo
        return UserModelSerializer


class UserCustomViewSetV2(ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, GenericViewSet):
    # permission_classes = [StaffOnly]
    queryset = User.objects.all()

    # serializer_class = UserModelSerializer
    # pagination_class = UserLimitOffsetPagination

    def get_serializer(self):
        if self.request.version == "v2":
            return UserModelSerializerVersionTwo
        return UserModelSerializer
