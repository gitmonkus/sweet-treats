"""Sweet_treat URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.urls import path, include           # import include
# # from django.contrib import admin              # comment out, or just delete
# urlpatterns = [
#     path('', include('sweet_treat_app.urls')),	   
#     # path('admin/', admin.sites.urls)         # comment out, or just delete
# ]

# from django.conf.urls import url, include	# added an import!
# # from django.contrib import admin              # comment out, or just delete
# urlpatterns = [
#     url(r'^', include('apps.sweet_treat_app.urls')),	# use your app_name here
#     # url(r'^admin/', admin.sites.urls)         # comment out, or just delete
# ]

from django.urls import path, include           # import include
# from django.contrib import admin              # comment out, or just delete
urlpatterns = [
    path('', include('sweet_treat_app.urls')),	   
    # path('admin/', admin.sites.urls)         # comment out, or just delete
]