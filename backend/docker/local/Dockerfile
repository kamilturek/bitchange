FROM python:3.9

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV DJANGO_SETTINGS_MODULE config.settings.local

COPY ./requirements /requirements
RUN pip install -r /requirements/base.txt

WORKDIR /app

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
