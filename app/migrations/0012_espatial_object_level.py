# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2019-11-15 02:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_category_espatial_object_espatial_object'),
    ]

    operations = [
        migrations.AddField(
            model_name='espatial_object',
            name='level',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, help_text='Level Group', max_digits=5, null=True),
        ),
    ]
