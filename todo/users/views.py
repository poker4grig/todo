from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, BasePermission
from rest_framework.viewsets import GenericViewSet
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.pagination import LimitOffsetPagination
from users.models import User
from users.serializers import UserModelSerializer

# Create your views here.


class StaffOnly(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_staff


class UserLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class UserCustomViewSet(ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, GenericViewSet):
    # permission_classes = [StaffOnly]
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    pagination_class = UserLimitOffsetPagination


