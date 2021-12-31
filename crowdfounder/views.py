from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import ListView, DetailView #, CreateView, UpdateView
from django.contrib.auth.mixins import PermissionRequiredMixin
from .models import Idea
# Create your views here.

class IdeaListView(ListView):
    model = Idea
    template_name = 'crowdfounder/index.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'ideas'
    ordering = ['votes']
