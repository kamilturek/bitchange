from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import UserManager as BaseUserManager


class UserManager(BaseUserManager):
    def get_or_create_for_cognito(self, payload):
        return self.get_or_create(
            username=payload['cognito:username'],
            email=payload['email'],
            is_active=True,
        )[0]


class User(AbstractUser):
    objects = UserManager()
