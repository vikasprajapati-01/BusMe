from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'firstname', 'lastname', 'profile_created_at', 'is_admin']
    search_fields = ['email', 'firstname', 'lastname']