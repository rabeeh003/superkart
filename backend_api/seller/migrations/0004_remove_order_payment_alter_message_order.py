# Generated by Django 4.2.6 on 2023-12-08 17:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('seller', '0003_order_payment_order_payment_order_products_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='payment',
        ),
        migrations.AlterField(
            model_name='message',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='seller.order'),
        ),
    ]
