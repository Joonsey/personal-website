from django.urls import path
from .views import home
from . import views

urlpatterns = [
    path('<slug:id>/', home, name="article"),
]


