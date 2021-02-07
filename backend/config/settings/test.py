from .base import *

DEBUG = True

SECRET_KEY = 'TEST_SECRET_KEY'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'bitchange',
        'USER': 'bitchange',
        'PASSWORD': 'bitchange',
        'HOST': 'db',
        'PORT': 5432,
    },
}
