import pytest

from ..models import User


@pytest.mark.django_db
class TestUser:
    def test_create_user_successfully(self):
        email = 'user@email.com'
        password = 'passwd'
        user = User.objects.create_user(email, password)

        assert user.email == email
        assert user.check_password(password) is True
        assert user.is_staff is False
        assert user.is_superuser is False

    def test_create_user_requires_email(self):
        email = ''
        password = 'passwd'

        with pytest.raises(AssertionError) as ex:
            User.objects.create_user(email, password)

        assert str(ex.value) == 'Email is required.'

    def test_create_superuser_requires_truthy_is_staff(self):
        email = 'user@email.com'
        password = 'passwd'

        with pytest.raises(AssertionError) as ex:
            User.objects.create_superuser(email, password, is_staff=False)

        assert str(ex.value) == 'Superuser must have is_staff=True.'

    def test_create_superuser_requires_truthy_is_superuser(self):
        email = 'user@email.com'
        password = 'passwd'

        with pytest.raises(AssertionError) as ex:
            User.objects.create_superuser(email, password, is_superuser=False)

        assert str(ex.value) == 'Superuser must have is_superuser=True.'
