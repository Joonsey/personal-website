from django.urls import path
from . import views

# Create your views here.
urlpatterns = [
    path('', views.IdeaListView.as_view(), name='crowdfounder')
]