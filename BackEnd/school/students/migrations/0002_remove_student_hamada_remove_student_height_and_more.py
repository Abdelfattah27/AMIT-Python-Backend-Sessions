# Generated by Django 4.1.1 on 2023-04-10 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='hamada',
        ),
        migrations.RemoveField(
            model_name='student',
            name='height',
        ),
        migrations.RemoveField(
            model_name='student',
            name='image',
        ),
        migrations.RemoveField(
            model_name='student',
            name='married',
        ),
        migrations.RemoveField(
            model_name='student',
            name='url',
        ),
        migrations.AlterField(
            model_name='student',
            name='description',
            field=models.TextField(null=True),
        ),
    ]
