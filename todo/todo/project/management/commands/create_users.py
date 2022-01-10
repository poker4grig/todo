from django.core.management.base import BaseCommand
from users.models import User
from project.models import Project


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.all().delete()
        User.objects.create_superuser('poker4grig', 'poker4grig@yandex.ru', '1')
        User.objects.create_user('test', 'test@mail.ru', '1')
        # test_user2 = User.objects.create_user('test2', 'test2@mail.ru', '1')
        # test_user3 = User.objects.create_user('test3', 'test3@mail.ru', '1')


