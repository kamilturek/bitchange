from .base import *

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
