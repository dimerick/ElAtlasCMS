from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
	url(r'^update-location-groups/$', views.update_location_groups, name='update-location-groups'),
	url(r'^groups/$', views.groups, name='groups'),
	url(r'^perceptions/$', views.perceptions, name='perceptions'),
	url(r'^main-actors/$', views.main_actors, name='main-actors'),
]