# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2019-11-16 16:50
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0016_auto_20191116_1146'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='espatial_object',
            name='Map',
        ),
        migrations.AddField(
            model_name='espatial_object',
            name='cat_espatial_object',
            field=models.ForeignKey(help_text='Please supply a Map for this espatial object', null=True, on_delete=django.db.models.deletion.CASCADE, to='app.Category_Espatial_Object', verbose_name='Map'),
        ),
    ]
