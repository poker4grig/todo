from django.db import models
from users.models import User


# Create your models here.


class Project(models.Model):
    name = models.CharField(max_length=64)
    user = models.ManyToManyField(User)
    repo = models.URLField(blank=True)

    def __str__(self):
        return f'{self.name}'


class Todo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    text = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    # def __str__(self):
    #     return f'Заметка № {self.id} для пользователя {self.user} (проект {self.project})'

