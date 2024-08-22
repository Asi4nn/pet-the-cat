from rest_framework import serializers
from api.models import Cats


class CatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cats
        fields = ['id', 'pets']

