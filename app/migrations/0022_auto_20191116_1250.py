# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2019-11-16 17:50
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0021_auto_20191116_1246'),
    ]

    operations = [
        migrations.AlterField(
            model_name='espatial_object',
            name='cat_spatial_object_indv',
            field=models.ForeignKey(blank=True, help_text='Please supply a individual category for this espatial object', null=True, on_delete=django.db.models.deletion.CASCADE, to='app.Category_Spatial_Object_Indv', verbose_name='Category'),
        ),
    ]
