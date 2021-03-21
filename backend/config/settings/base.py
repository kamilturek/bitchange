"""
Django settings for bitchange project.
"""

import os
from pathlib import Path

from django.core.exceptions import ImproperlyConfigured


def get_env_variable(var_name):
    """Get the environment variable or return exception."""
    try:
        return os.environ[var_name]
    except KeyError:
        raise ImproperlyConfigured(f'Set the {var_name} environment variable')


BASE_DIR = Path(__file__).resolve().parent.parent

ALLOWED_HOSTS = []

FIRST_PARTY_APPS = [
    'bitchange.stocks',
    'bitchange.users',
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
] + FIRST_PARTY_APPS

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'

AWS_REGION = get_env_variable('AWS_REGION')

COGNITO_AWS_REGION = AWS_REGION
COGNITO_USER_POOL = get_env_variable('COGNITO_USER_POOL')
COGNITO_AUDIENCE = get_env_variable('COGNITO_AUDIENCE')
COGNITO_USER_MODEL = 'users.User'
AUTH_USER_MODEL = 'users.User'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'django_cognito_jwt.JSONWebTokenAuthentication',
    ],
}

SQS_AWS_REGION = AWS_REGION
SQS_URL = get_env_variable('SQS_URL')
SQS_USER_ACCESS_KEY_ID = get_env_variable('SQS_USER_ACCESS_KEY_ID')
SQS_USER_SECRET_ACCESS_KEY = get_env_variable('SQS_USER_SECRET_ACCESS_KEY')

CELERY_BROKER_URL = f'sqs://{SQS_USER_ACCESS_KEY_ID}:{SQS_USER_SECRET_ACCESS_KEY}@'
CELERY_BROKER_TRANSPORT_OPTIONS = {
    'region': SQS_AWS_REGION,
    'predefined_queues': {
        'celery': {
            'url': SQS_URL,
            'access_key_id': SQS_USER_ACCESS_KEY_ID,
            'secret_access_key': SQS_USER_SECRET_ACCESS_KEY,
        },
    },
}
