# Generated by Django 4.2.6 on 2023-12-20 06:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seller', '0015_order_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='price',
            field=models.FloatField(),
        ),
    ]
