# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2019-11-16 15:50
from __future__ import unicode_literals

import colorfield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_auto_20191116_1037'),
    ]

    operations = [
        migrations.AddField(
            model_name='category_spatial_object_indv',
            name='color_cat',
            field=colorfield.fields.ColorField(default='#FFF', max_length=18, verbose_name='Color'),
        ),
    ]
