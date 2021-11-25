from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from users.views import UserModelViewSet
from project.views import ProjectModelViewSet, TodoModelViewSet
from lesson_4_tests.test_views import ProjectApiDestroyView, ProjectApiRetrieveView, ProjectApiCreateView, ProjectApiUpdateView, ProjectApiListCreateView
# from lesson_4_tests.test_views import get


router = DefaultRouter()
router.register('users', UserModelViewSet)
router.register('projects', ProjectModelViewSet)
router.register('todo', TodoModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api/list/', ProjectApiListCreateView.as_view()),
    path('api/create/', ProjectApiCreateView.as_view()),
    path('api/update/<int:pk>/', ProjectApiUpdateView.as_view()),
    path('api/delete/<int:pk>/', ProjectApiDestroyView.as_view()),
    path('api/detail/<int:pk>/', ProjectApiRetrieveView.as_view()),

]

