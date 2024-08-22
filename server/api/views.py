from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from api.models import Cats
from api.serializers import CatsSerializer


# Create your views here.
class PetDetails(APIView):
    def get(self, request, id):
        pets = Cats.objects.filter(id=id).first()
        if pets is None:
            pets = Cats.objects.create(id=id)
        serializer = CatsSerializer(pets)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, id):
        pets = Cats.objects.filter(id=id).first()
        if pets is None:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)
        pets.pets += 1
        pets.save()
        serializer = CatsSerializer(pets)
        return Response(serializer.data, status=status.HTTP_200_OK)
