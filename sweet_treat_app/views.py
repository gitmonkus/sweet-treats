# from django.shortcuts import render, HttpResponse
# from django.contrib import messages
# from .models import *
# # import bcrypt
# import re
# EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from django.shortcuts import render, redirect, HttpResponse

def index(request):
    return render(request, 'sweet_treat_app/index.html')

def sweets(request):
    return render(request,'sweet_treat_app/sweets.html')


def about(request):
    return render(request,'sweet_treat_app/about.html')