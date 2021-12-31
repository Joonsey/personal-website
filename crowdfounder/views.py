from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import ListView, DetailView, CreateView, UpdateView
from django.contrib.auth.mixins import PermissionRequiredMixin
from .models import Idea
from django.urls import path
from django.db.models import F
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class IdeaListView(ListView):
    model = Idea
    template_name = 'crowdfounder/index.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'ideas'
    ordering = ['-votes']



class IdeaCreateView(CreateView):
    model = Idea
    votes = 1
    fields = ['header','description','author_mail']


@csrf_exempt
def increaseVote(request, pk):
    idea = Idea.objects.get(pk=pk)
    idea.votes += 1
    idea.save()
    return redirect('crowdfounder')
    