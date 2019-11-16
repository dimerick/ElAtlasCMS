from django.db import models
from cms.models.pluginmodel import CMSPlugin
from djangocms_text_ckeditor.fields import HTMLField
from filer.fields.image import FilerImageField
from colorfield.fields import ColorField
from django.contrib.gis.db import models as models_gis


# Create your models here.
class Slider(models.Model):
	name = models.CharField(max_length=255)
	

	def __str__(self):
		return self.name

class SliderActive(CMSPlugin):
	slider = models.ForeignKey(Slider, on_delete=models.CASCADE)
	nav_buttons = models.BooleanField('Low Controls', help_text='Enable low controls?', default=True)

	class Meta:
		verbose_name = "Slider"

class Slide(models.Model):
	
	slider = models.ForeignKey(Slider, on_delete=models.CASCADE)	
	image = FilerImageField(help_text='Please supply an image for this slide. The recommended image size is 1920px width, and 670px height.')
	title = HTMLField('', blank=True, null=True, help_text='Please supply a title for the slide')
	top_title = models.IntegerField('Top', default=100, blank=True, null=True, help_text='Top position')
	left_title = models.IntegerField('Left', default=100, blank=True, null=True, help_text='Left position')
	size_title = models.PositiveIntegerField('Size', default=100, blank=True, null=True, help_text='Font size')
	color_title = ColorField('Color', default='#FFF')
	text = HTMLField('', blank=True, null=True, help_text='Please supply a description for the slide')
	top_text = models.IntegerField('Top', default=300, blank=True, null=True, help_text='Top position')
	left_text = models.IntegerField('Left', default=100, blank=True, null=True, help_text='Left position')
	size_text = models.PositiveIntegerField('Size', default=50, blank=True, null=True, help_text='Font size')
	color_text = ColorField('Color', default='#FFF')
	show_button = models.BooleanField('Show', default=True, help_text='Show button for this slide?')
	text_button = models.CharField('Text', default='Show More', max_length=255, blank=True, null=True)
	url_button = models.CharField('Url', max_length=255, blank=True, null=True, default='#')
	color_button = ColorField('Color Background', default='#62e0c1')
	top_button = models.IntegerField('Top', default=500, blank=True, null=True, help_text='Top position')
	left_button = models.IntegerField('Left', default=1000, blank=True, null=True, help_text='Left position')
	is_active = models.BooleanField(default=True, help_text='Is active this slide?')
	position = models.DecimalField(max_digits=5, decimal_places=1, default=0, blank=True, null=True, help_text='Position Slide')
	
	def __str__(self):
		if self.title != None:
			return self.title
		if self.text != None:
			return self.text
		return 'Slide'+str(self.id)
		

class Partner(models.Model):
	name = models.CharField(max_length=100, unique=True)
	position = models.DecimalField(max_digits=5, decimal_places=1, default=0, help_text='Position partner on slide')
	image = FilerImageField(help_text='Please supply an image of this partner')
	url = models.CharField('Url', max_length=255, blank=True, null=True, default='#', help_text='Link partner website')
	is_active = models.BooleanField(default=True, help_text='Is active this partner?')

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = 'partners'


class TeamMember(models.Model):
	name = models.CharField(max_length=255)
	rol = models.CharField(max_length=255)
	email = models.CharField(max_length=255)
	description = models.TextField()
	url_profile = models.CharField(max_length=255)
	is_active = models.BooleanField(default=True)
	position = models.DecimalField(max_digits=5, decimal_places=1, default=0)
	image = FilerImageField(help_text='Please supply an image for this member')

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = 'Team Members'

class Activity(models.Model):
	name = models.CharField(max_length=255)
	description = models.TextField()
	date = models.DateField()
	url = models.CharField(max_length=255, default='#')
	is_active = models.BooleanField(default=True)
	image = FilerImageField(help_text='Please supply an image for this activity', blank=True, null=True)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = 'Activities'

class Project(models.Model):
	name = models.CharField(max_length=255)
	description = models.TextField()
	point = models_gis.PointField()
	url = models.CharField(max_length=255, default="#")
	position = models.DecimalField(max_digits=5, decimal_places=1, default=0, blank=True, null=True, help_text='Position Project')
	is_active = models.BooleanField(default=True)
	image = FilerImageField(help_text='Please supply an image for this project', blank=True, null=True, default=None)
	
	def __str__(self):
		return self.name

class Group(models.Model):
	name = models.CharField(max_length=255, help_text='Please supply a name for this group')
	email = models.EmailField(max_length=255, help_text='Please supply an email for this group')
	description = models.TextField(help_text='Please supply a description for this group')
	level = models.DecimalField(max_digits=5, decimal_places=1, default=0, blank=True, null=True, help_text='Level Group')
	location = models_gis.PointField(blank=True, null=True)
	lat = models_gis.CharField(help_text='Please supply a latitude for this group', max_length=255, default=None)
	lon = models_gis.CharField(help_text='Please supply a longitude for this group', max_length=255, default=None)
	url = models.CharField(max_length=255, default="#")
	icon = models.CharField(max_length=255, default=None, blank=True, null=True, help_text='Please supply an icon for this group')
	is_active = models.BooleanField(default=True)
	image = FilerImageField(help_text='Please supply an image for this group', blank=True, null=True, default=None)
	
	
	def __str__(self):
		return self.name

class Person(models.Model):
	name = models.CharField(max_length=255, help_text='Please supply a name for this person')
	group = models.ForeignKey(Group, on_delete=models.CASCADE)

	def __str__(self):
		return self.name

class Lider(models.Model):
	group = models.ForeignKey(Group, on_delete=models.CASCADE)
	person = models.ForeignKey(Person, on_delete=models.CASCADE)

	def __str__(self):
		return self.name+"-"+self.person

	class Meta:
		unique_together = ('group', 'person')

	class Meta:
		verbose_name_plural = 'Lideres'

class Category_Perception(models.Model):
	name = models.CharField(max_length=255, help_text='Please supply a name for this Category')
	description = models.TextField(help_text='Please supply a description for this Category')

	def __str__(self):
		return self.name

class Perception(models.Model):
	description = models.TextField(help_text='Please supply a description for this Perception')
	person = models.ForeignKey(Person, on_delete=models.CASCADE)
	cat_percep = models.ForeignKey(Category_Perception, on_delete=models.CASCADE)
	geojson = models.TextField(blank=True, null=True, help_text='Please supply a geojson for this Perception')
	location = models_gis.GeometryField(blank=True, null=True)

	def __str__(self):
		return self.cat_percep.name+"-"+self.person.name

class Category_Espatial_Object(models.Model):
	name = models.CharField(max_length=255, help_text='Please supply a name for this Map')
	description = models.TextField(help_text='Please supply a description for this Map')

	class Meta:
		verbose_name = "Map"
		verbose_name_plural = "Maps"

	def __str__(self):
		return self.name

class Category_Spatial_Object_Indv(models.Model):
	name = models.CharField(max_length=255, help_text='Please supply a individual category for each spatial object in the map')
	description = models.TextField(help_text='Please supply a description for this individual category')
	color_cat = ColorField('Color', default='#FFF')

	class Meta:
		verbose_name = "Category Spatial Object"
		verbose_name_plural = "Category Spatial Objects"

	def __str__(self):
		return self.name

class Espatial_Object(models.Model):
	name = models.CharField(max_length=255, help_text='Please supply a name for this group')
	cat_espatial_object = models.ForeignKey(Category_Espatial_Object, verbose_name = 'Map', help_text='Please supply a Map for this espatial object', on_delete=models.CASCADE)
	cat_spatial_object_indv = models.ForeignKey(Category_Spatial_Object_Indv, verbose_name = 'Category', help_text='Please supply a individual category for this espatial object', on_delete=models.CASCADE)
	description = models.TextField(help_text='Please supply a description for this group')
	level = models.DecimalField(max_digits=5, decimal_places=2, default=0, blank=True, null=True, help_text='Level Group')
	location = models_gis.GeometryField(blank=True, null=True)
	lat = models_gis.CharField(help_text='Please supply a latitude for this espatial object', max_length=255, default=None)
	lon = models_gis.CharField(help_text='Please supply a longitude for this espatial object', max_length=255, default=None)
	icon = models.CharField(max_length=255, default=None, blank=True, null=True, help_text='Please supply an icon for this espatial object')
	is_active = models.BooleanField(default=True)
	image = FilerImageField(help_text='Please supply an image for this espatial object', blank=True, null=True, default=None)

	class Meta:
		verbose_name = "Spatial Object"
		verbose_name_plural = "Spatial Objects"

	def __str__(self):
		return self.cat_espatial_object.name+' | '+self.cat_spatial_object_indv.name+' | '+self.name
# class Text_Slide(models.Model):
	
	
# 	slide = models.ForeignKey(Slide, on_delete=models.CASCADE)


