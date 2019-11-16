from django.contrib import admin

from .models import Slider, Slide, Partner, TeamMember, Activity, Project, Group, Person, Lider, Category_Perception, Perception, Category_Espatial_Object, Category_Spatial_Object_Indv, Espatial_Object

# Register your models here.
class SliderAdmin(admin.ModelAdmin):
	list_display = ('id', 'name')

class SlideAdmin(admin.ModelAdmin):
	list_display = ('id', 'title', 'is_active', 'position', 'slider')

	fieldsets = (
        ('Title', {
            'fields': ('title', ('top_title', 'left_title'), ('size_title', 'color_title'))
        }),
        ('Description', {
            'fields': ('text', ('top_text', 'left_text'), ('size_text', 'color_text'))
        }),
        ('Image', {
            'fields': (['image'])
        }),
        ('Button', {
            'fields': ('show_button', ('text_button', 'url_button', 'color_button'), ('top_button', 'left_button'))
        }),
        ('General Options', {
            'fields': ('slider', 'is_active', 'position')
        })
    )

class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'position')
	# fields = ('slider', 'image', 'title', ('top_title', 'left_title', 'size_title'), 'text', 
	# 	('top_text', 'left_text', 'size_text'), ('show_button', 'text_button', 'url_button'), ('top_button', 
	# 		'left_button'), 'is_active', 'position')

class ActivityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'is_active', 'date')

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'is_active', 'position')

class GroupAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'is_active', 'icon', 'email')

class PartnerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'is_active', 'position')

class PersonAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'group')

class LiderAdmin(admin.ModelAdmin):
    list_display = ('id', 'group', 'person')

class CategoryPerceptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')

class PerceptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'person', 'cat_percep')



admin.site.register(Slider, SliderAdmin)
admin.site.register(Slide, SlideAdmin)
admin.site.register(Partner, PartnerAdmin)
admin.site.register(TeamMember, TeamMemberAdmin)
admin.site.register(Activity, ActivityAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Group, GroupAdmin)
admin.site.register(Person)
admin.site.register(Lider)
admin.site.register(Category_Perception)
admin.site.register(Perception)
admin.site.register(Category_Espatial_Object)
admin.site.register(Category_Spatial_Object_Indv)
admin.site.register(Espatial_Object)
