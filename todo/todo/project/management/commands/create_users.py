from django.core.management.base import BaseCommand
from users.models import User
from project.models import Project


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.all().delete()
        superuser = User.objects.create_superuser(username='poker4grig', email='poker4grig@yandex.ru', password='1', is_staff=True)

