# Generated by Django 4.2.6 on 2023-12-17 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_location_phone_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='pin_code',
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]
