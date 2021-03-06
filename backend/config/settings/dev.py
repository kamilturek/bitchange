from .base import *

DEBUG = True

SECRET_KEY = 'DEV_SECRET_KEY'

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

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

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
]
