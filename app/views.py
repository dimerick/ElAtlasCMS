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
	mapa = request.GET['mapa']
	espatial_objects = Espatial_Object.objects.filter(cat_espatial_object__name = mapa, is_active = True)
	fc = {"type":"FeatureCollection", "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "features": []}
	for obj in espatial_objects:
		image = None
		if obj.image != None:
			image = obj.image.url
		coords = (obj.location.coords[0], obj.location.coords[1])
		f = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coords}, "properties": {"name": obj.name,  "description": obj.description, "coords": (obj.location.coords[0], obj.location.coords[1]),"mapa": obj.cat_espatial_object.name, "category": obj.cat_spatial_object_indv.name, "level": obj.level, "color": obj.cat_spatial_object_indv.color_cat, "icon": obj.icon, "image": image}}
		fc['features'].append(f)
	return JsonResponse(fc, safe=False)

def network_espatial_objects(request):
	mapa = request.GET['mapa']
	category1 = request.GET['category1']
	category2 = request.GET['category2']
	
	espatial_objects1 = Espatial_Object.objects.filter(cat_espatial_object__name = mapa, cat_spatial_object_indv__name = category1, is_active = True)
	espatial_objects2 = Espatial_Object.objects.filter(cat_espatial_object__name = mapa, cat_spatial_object_indv__name = category2, is_active = True)
	arr_gen = []
	num = 0
	for obj in espatial_objects1:
		for obj2 in espatial_objects2:
			arr = []
			p1 = {"lng": float(obj.location.coords[0]), "lat": float(obj.location.coords[1])}
			p2 = {"lng": float(obj2.location.coords[0]), "lat": float(obj2.location.coords[1])}
			arr.append(p1)
			arr.append(p2)
			arr_gen.append(arr)
		num = num + 1		
		
	return JsonResponse(arr_gen, safe=False)

def update_location_espatial_objects(request):
	espatial_objects = Espatial_Object.objects.all()
	for obj in espatial_objects:
		wkt = 'POINT(' + obj.lon + ' ' + obj.lat + ')'
		obj.location = GEOSGeometry(wkt, srid=4326)
		obj.save()
	return HttpResponse("Se ha actualizado la ubicacion de los objectos espaciales exitosamente")
