# from django.urls import path
# from django.conf import settings
# from django.contrib.staticfiles.urls import staticfiles_urlpatterns
# from django.conf.urls.static import static
# from . import views


# urlpatterns = [
#     path('', views.index),
#     # url(r'^$', views.index),
    
# ]

from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index),
    path('index.html', views.index),	  
    path('sweets.html', views.sweets),
    path('about.html', views.about),
    path('inventory.html', views.inventory),
  

    
]


