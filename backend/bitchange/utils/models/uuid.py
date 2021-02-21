import uuid

from django.db import models


class UUIDModel(models.Model):
    uuid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )

    class Meta:
        abstract = True

    def __repr__(self) -> str:
        return f'<{self.__class__.__name__} {self.uuid}>'
