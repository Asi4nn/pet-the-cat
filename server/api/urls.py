from django.urls import path

from . import views

urlpatterns = [
    path('pets/<str:id>/', views.PetDetails.as_view()),
]
