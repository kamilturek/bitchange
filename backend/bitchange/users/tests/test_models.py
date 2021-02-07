import pytest

from ..models import User


@pytest.mark.django_db
class TestUser:

    def test_create_user_successfully(self):
        email = 'user@email.com'
        password = 'passwd'
        user = User.objects.create_user(email, password)

        assert user.email == email
        assert user.password == password
        assert user.is_staff is False
        assert user.is_superuser is False
