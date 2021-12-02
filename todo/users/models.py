from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
    id = models.PositiveIntegerField(primary_key=True)
    email = models.EmailField(unique=True)
