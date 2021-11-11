from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Documento
from django.contrib.gis.geos import GEOSGeometry
from django.core.serializers import serialize
from django.db import connection #para ejecutar RAW queries
from django.db.models import Q

def ireplace(old, new, text):
    """ 
    Replace case insensitive
    Raises ValueError if string not found
    """
    index_l = text.lower().index(old.lower())
    return text[:index_l] + new + text[index_l + len(old):] 

def get_documento(request):
    key_word = request.GET['key_word']
    key_word = key_word.strip()
    print(key_word)
    if key_word != '':
        docs_query = Documento.objects.filter(Q(titulo__icontains=key_word) | Q(texto__icontains=key_word))
        docs = []
        for doc in docs_query:
            doc.titulo = ireplace(key_word, f"<span style=\"background-color:yellow;font-weight:bold\">{key_word}</span>", doc.titulo)
            doc.texto = ireplace(key_word, f"<span style=\"background-color:yellow;font-weight:bold\">{key_word}</span>", doc.texto)
            docs.append({"titulo": doc.titulo, "fecha": doc.fecha, "autor": doc.autor, "tipo": doc.tipo.nombre, "texto": doc.texto})

        dict_data = {"data": docs}
        return JsonResponse(dict_data, safe=False)
    
    # else:
	# 	perceptions = Perception.objects.all()
	# fc = {"type":"FeatureCollection", "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "features": []}
	# for percep in perceptions:
	# 	image = None
	# 	if percep.person.group.image != None:
	# 		image = percep.person.group.image.url
	# 	coords = (percep.person.group.location.coords[0], percep.person.group.location.coords[1])
	# 	f = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coords}, "properties": {"name": percep.person.group.name, "email": percep.person.group.email, "description": percep.person.group.description, "icon": percep.person.group.icon, "image": image, "perception": percep.description}}
	# 	fc['features'].append(f)
	# return JsonResponse(fc, safe=False)
