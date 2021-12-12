from django.urls import path
from .views import home
from . import views

urlpatterns = [
    path('<int:id>/', home, name="article"),
]


