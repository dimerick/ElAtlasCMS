from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
	url(r'^update-location-groups/$', views.update_location_groups, name='update-location-groups'),
	url(r'^update-location-espatial-objects/$', views.update_location_espatial_objects, name='update-location-espatial-objects'),
	url(r'^groups/$', views.groups, name='groups'),
	url(r'^perceptions/$', views.perceptions, name='perceptions'),
	url(r'^main-actors/$', views.main_actors, name='main-actors'),
	url(r'^spatial-objects/$', views.espatial_objects, name='espatial-objects'),
	url(r'^network-spatial-objects/$', views.network_espatial_objects, name='network-espatial-objects'),
]