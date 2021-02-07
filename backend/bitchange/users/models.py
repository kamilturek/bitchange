from typing import Any

from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email: str, password: str, **kwargs: Any) -> 'User':
        assert email, 'Email is required.'

        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save()

        return user

    def create_user(self, email: str, password: str, **kwargs: Any) -> 'User':
        kwargs.setdefault('is_staff', False)
        kwargs.setdefault('is_superuser', False)

        return self._create_user(email, password, **kwargs)

    def create_superuser(self, email: str, password: str, **kwargs: Any) -> 'User':
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)

        assert kwargs['is_staff'], 'Superuser must have is_staff=True.'
        assert kwargs['is_superuser'], 'Superuser must have is_superuser=True'

        return self._create_user(email, password, **kwargs)


class User(AbstractUser):
    username = None
    email = models.EmailField('Email Address', unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()
