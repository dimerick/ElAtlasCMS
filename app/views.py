from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Group, Person, Perception, Category_Espatial_Object, Espatial_Object
from django.contrib.gis.geos import GEOSGeometry
from django.core.serializers import serialize
from django.db import connection #para ejecutar RAW queries

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at ElAtlas App.")


def update_location_groups(request):
	grupos = Group.objects.all()
	for grupo in grupos:
		wkt = 'POINT(' + grupo.lon + ' ' + grupo.lat + ')'
		grupo.location = GEOSGeometry(wkt, srid=4326)
		grupo.save()
	return HttpResponse("Se ha actualizado la ubicacion de los grupos exitosamente")

def groups(request):
	grupos = Group.objects.all().order_by('name').filter(is_active=True)
	fc = {"type":"FeatureCollection", "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "features": []}
	for grupo in grupos:
		image = None
		if grupo.image != None:
			image = grupo.image.url
		#s.point.transform(3116)
		coords = (grupo.location.coords[0], grupo.location.coords[1])
		f = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coords}, "properties": {"name": grupo.name, "email": grupo.email, "description": grupo.description, "icon": grupo.icon, "image": image}}
		fc['features'].append(f)
	return JsonResponse(fc, safe=False)

def perceptions(request):
	key_word = request.GET['key_word']
	print(key_word)
	if key_word != '':
		perceptions = Perception.objects.filter(description__icontains=key_word)
	else:
		perceptions = Perception.objects.all()
	fc = {"type":"FeatureCollection", "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "features": []}
	for percep in perceptions:
		image = None
		if percep.person.group.image != None:
			image = percep.person.group.image.url
		coords = (percep.person.group.location.coords[0], percep.person.group.location.coords[1])
		f = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coords}, "properties": {"name": percep.person.group.name, "email": percep.person.group.email, "description": percep.person.group.description, "icon": percep.person.group.icon, "image": image, "perception": percep.description}}
		fc['features'].append(f)
	return JsonResponse(fc, safe=False)

def main_actors(request):
	level = request.GET['level']
	if level != '':
		level = int(level)
		grupos = Group.objects.filter(level__gte=level)
	else:
		grupos = Group.objects.all()
	fc = {"type":"FeatureCollection", "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "features": []}
	for grupo in grupos:
		image = None
		if grupo.image != None:
			image = grupo.image.url
		#s.point.transform(3116)
		coords = (grupo.location.coords[0], grupo.location.coords[1])
		f = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coords}, "properties": {"name": grupo.name, "email": grupo.email, "description": grupo.description, "level": grupo.level, "icon": grupo.icon, "image": image}}
		fc['features'].append(f)
	return JsonResponse(fc, safe=False)

def espatial_objects(request):
	category = request.GET['category']
	print(category)
	espatial_objects = Espatial_Object.objects.filter(cat_espatial_object__name = category, is_active = True)
	fc = {"type":"FeatureCollection", "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "features": []}
	for obj in espatial_objects:
		image = None
		if obj.image != None:
			image = obj.image.url
		coords = (obj.location.coords[0], obj.location.coords[1])
		f = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coords}, "properties": {"name": obj.name,  "description": obj.description, "icon": obj.icon, "image": image}}