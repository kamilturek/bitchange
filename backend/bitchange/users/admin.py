from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin

from .models import User


@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (
            None,
            {
                'classes': ('wide',),
                'fields': {
                    'email',
                    'password1',
                    'password2',
                },
            },
        ),
    )
    readonly_fields = ('last_login', 'date_joined')

    list_display = ('email', 'is_staff', 'is_superuser')
    ordering = ('email',)
