from django.shortcuts import render, HttpResponse


def index(request):
    return render(request, 'sweet_treat_app/index.html')