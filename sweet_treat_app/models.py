# from django.db import models

# # Create your models here.

from __future__ import unicode_literals
from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}

        if len(postData['first_name']) < 2:
            errors["name"] = "First name should be at least 2 characters"
        if len(postData['last_name']) < 3:
            errors["last_name"] = "Last name shoulld be at least 3 characters"
        if len(postData['email']) < 5:
             errors["email"] = "email should be at least 5 characters"
        if len(postData['password']) < 6:
            errors["password"] = "Password should be at least 6 characters"
        if len(postData['confirm_pw']) < 6:
            errors["confirm_pw"] = "Password should be at least 6 characters"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    confirm_pw = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()