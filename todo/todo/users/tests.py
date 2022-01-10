from django.test import TestCase
from requests.auth import HTTPBasicAuth
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase, \
    CoreAPIClient
from mixer.backend.django import mixer
from users.models import User
from project.models import Project, Todo
from .views import UserCustomViewSet


class TestUserViewSet(TestCase):

    def setUp(self) -> None:
        self.name = 'admin'
        self.password = 'admin_12345'
        self.data = {'username': 'pasha', 'first_name': 'pasha', 'last_name': 'pasha', 'email': 'pasha@pasha.com'}
        self.data_put = {'username': 'natasha', 'first_name': 'natasha', 'last_name': 'natasha',
                         'email': 'natasha@pmail.com'}
        self.url = '/api/users/'
        self.admin = User.objects.create_superuser(self.name, 'admin@mail.ru', self.password)

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = UserCustomViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.data, format='json')
        view = UserCustomViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.data, format='json')
        force_authenticate(request, self.admin)
        view = UserCustomViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_detail(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        response = client.get(f'{self.url}{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_guest(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        response = client.put(f'{self.url}{user.id}/', self.data_put)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_admin(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        client.login(username=self.name, password=self.password)
        response = client.put(f'{self.url}{user.id}/', self.data_put)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user_update = User.objects.get(id=user.id)
        self.assertEqual(user_update.username, 'natasha')
        self.assertEqual(user_update.email, 'natasha@pmail.com')
        client.logout()

    def tearDown(self) -> None:
        pass


class TestMath(APISimpleTestCase):
    def test_sqrt(self):
        import math
        response = math.sqrt(4)
        self.assertEqual(response, 2)


class TestProjectViewSet(APITestCase):
    def setUp(self) -> None:
        self.name = 'admin'
        self.password = 'admin_12345'
        self.data = {'username': 'pasha', 'first_name': 'pasha', 'last_name': 'pasha', 'email': 'pasha@pasha.com'}
        self.data_put = {'username': 'natasha', 'first_name': 'natasha', 'last_name': 'natasha',
                         'email': 'natasha@pmail.com'}
        self.url = '/api/projects/'
        self.admin = User.objects.create_superuser(self.name, 'admin@mail.ru', self.password)

    def test_get_list(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_admin(self):
        user = User.objects.create(**self.data)
        user2 = User.objects.create(**self.data_put)
        project = Project.objects.create(name='основной', repo='https://github.com/poker4grig/todo')
        project.user.add(user, user2)
        print(project.user)
        self.client.login(username=self.name, password=self.password)
        response = self.client.get(f'{self.url}{project.id}/')
        # response = self.client.put(f'{self.url}{project.id}/', {'name': 'Другой', 'user': [3],
        #                                                         'repo': 'https://github.com/poker4grig/todo2'})
        print(*response)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        project_test_id = Project.objects.get(id=project.id)
        # self.assertEqual(project_test_id.name, 'Другой')
        self.client.logout()

    def test_edit_mixer_project(self):
        user = User.objects.create(**self.data)
        user2 = User.objects.create(**self.data_put)
        project = mixer.blend(Project, user=user)
        # project.user.add(user, user2)
        print(project.user)
        self.client.login(username=self.name, password=self.password)
        # response = self.client.get(f'{self.url}{project.id}/')
        response = self.client.put(f'{self.url}{project.id}/', {'name': 'Другой', 'user': [3],
                                                                'repo': 'https://github.com/poker4grig/todo2'})
        print(*response)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.client.logout()

    def test_create_todo(self):
        client = CoreAPIClient()
        schema = client.get('http://127.0.0.1:8000/schema/')
        user = User.objects.create(**self.data)
        project = mixer.blend(Project, name='Тестовая заметка')
        todo = Todo.objects.create(user=user, project=project, text='sometext sometext sometext')
        # print(schema)
        client = CoreAPIClient()
        client.session.auth = HTTPBasicAuth(self.name, self.password)
        data = client.action(schema, ['api', 'todo', 'list'])
        # print(data['results'])
        # Создана ли заметка
        assert (len(data['results']) == 1)
        # Проверяем текст заметки
        assert (data['results'][0]['text'] == 'sometext sometext sometext')

    def tearDown(self) -> None:
        pass

    # Пример из документации
    # Fetch the API schema
    # client = CoreAPIClient()
    # schema = client.get('http://testserver/schema/')
    #
    # # Create a new organisation
    # params = {'name': 'MegaCorp', 'status': 'active'}
    # client.action(schema, ['organisations', 'create'], params)
    #
    # # Ensure that the organisation exists in the listing
    # data = client.action(schema, ['organisations', 'list'])
    # assert (len(data) == 1)
    # assert (data == [{'name': 'MegaCorp', 'status': 'active'}])
