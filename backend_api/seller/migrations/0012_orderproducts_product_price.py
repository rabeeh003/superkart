# Generated by Django 4.2.6 on 2023-12-11 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seller', '0011_payment_payment_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderproducts',
            name='product_price',
            field=models.CharField(blank=True, max_length=7, null=True),
        ),
    ]