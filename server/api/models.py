from django.db import models


class Cats(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    pets = models.IntegerField(default=0)
