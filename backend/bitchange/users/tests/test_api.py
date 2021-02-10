import pytest

from django.urls import reverse

from ..models import User


@pytest.mark.django_db
class TestAuthAPI:
    def test_register(self, client):
        url = reverse('rest_register')
        data = {
            'email': 'user@email.com',
            'password1': '1passWORD1',
            'password2': '1passWORD1',
        }
        response = client.post(url, data=data)

        assert response.status_code == 201

    def test_login(self, client):
        email = 'user@email.com'
        password = '1passWORD1'
        User.objects.create_user(email, password)
        url = reverse('rest_login')
        data = {
            'email': email,
            'password': password,
        }
        response = client.post(url, data=data)

        assert response.status_code == 200
        assert 'key' in response.data
