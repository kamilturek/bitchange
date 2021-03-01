FROM python:3.9

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    DJANGO_SETTINGS_MODULE=config.settings.dev \
    POETRY_VERSION=1.1.4

COPY ./pyproject.toml ./poetry.lock ./

RUN pip install "poetry==$POETRY_VERSION"
RUN poetry config virtualenvs.create false
RUN poetry install

WORKDIR /app

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
