from django.urls import path
from users.views import UserCustomViewSetV2

app_name = 'users'

urlpatterns = [
    path('', UserCustomViewSetV2.as_view({'get': 'list'})),
]