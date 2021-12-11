from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import ListView, DetailView #, CreateView, UpdateView
from django.contrib.auth.mixins import PermissionRequiredMixin
from .models import Post





def home(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'blog/home.html', context)

class PostListView(ListView):
    model = Post
    template_name = 'blog/home.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    ordering = ['date_posted']



class PostDetailView(DetailView):
    model = Post

# class PostCreateView(PermissionRequiredMixin, CreateView):
    # permission_required = 'superuser'
    # model = Post
    # fields = ['title', 'content']
    # 
# 
# class PostUpdateView(PermissionRequiredMixin, UpdateView):
    # permission_required = 'superuser'
    # model = Post
    # fields = ['title', 'content']
# 



def about(request):
    context = {
        'title':'About'
    }
    return render(request, 'blog/about.html', context)
