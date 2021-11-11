from django.db import models

# Create your models here.
class Tipo(models.Model):
    nombre = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre

class Documento(models.Model):
    titulo = models.CharField(max_length=200)
    fecha = models.IntegerField()
    autor = models.CharField(max_length=200)
    tipo = models.ForeignKey(Tipo)
    texto = models.TextField()
    
    def __str__(self):
        return self.titulo