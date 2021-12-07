from django.contrib import admin
from users.models import User
from django.contrib.auth.admin import UserAdmin

admin.site.register(User, UserAdmin)

# @admin.register(User)
# class UserAdmin(admin.ModelAdmin):
#     model = User
#
# @admin.register(User)
# class UserAdmin(admin.ModelAdmin):
#     # model = User
#     list_display = ('id', 'username', 'first_name', 'last_name', 'email')
#     fields = (('username', 'email', 'password'), ('first_name', 'last_name'))
#     ordering = ('username', 'first_name', 'last_name', 'email', 'password')
#     search_fields = ('username',)

