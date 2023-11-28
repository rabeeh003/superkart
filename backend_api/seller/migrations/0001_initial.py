# Generated by Django 4.2.6 on 2023-11-25 10:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('prodect', '0001_initial'),
        ('accounts', '0006_shop_shop_owner'),
    ]

    operations = [
        migrations.CreateModel(
            name='seller_products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('product_status', models.CharField(choices=[('avb', 'Available'), ('out', 'Out of Stoke')], default='avb', max_length=20)),
                ('added_at', models.DateTimeField(auto_now_add=True)),
                ('edited_at', models.DateTimeField(auto_now=True)),
                ('offer_price', models.IntegerField(blank=True, null=True)),
                ('offer_count', models.CharField(blank=True, max_length=10, null=True)),
                ('offer_start', models.DateTimeField(blank=True, null=True)),
                ('offer_end', models.DateTimeField(blank=True, null=True)),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='prodect.global_productes')),
                ('shop_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.shop')),
            ],
        ),
    ]
