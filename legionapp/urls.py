from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^documento/$', views.get_documento, name='get-documento'),
]