from django.shortcuts import render

# Create your views here.

def home(request, id):
    return render(request, "article/%s.html" % id)