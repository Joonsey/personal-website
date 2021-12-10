from django.shortcuts import render
from django.http import HttpResponse

posts = [
    {
        'author': 'Jae',
        'title':'Blog Post 1',
        'content':'First post content',
        'date_posted': 'December 10, 2021'
    },
    {
        'author': 'Jae',
        'title':'Blog Post 2',
        'content':'second post content',
        'date_posted': 'December 10, 2021'
    }
]

def home(request):
    context = {
        'posts':posts
    }
    return render(request, 'blog/home.html', context)

def about(request):
    context = {
        'title':'About'
    }
    return render(request, 'blog/about.html', context)
