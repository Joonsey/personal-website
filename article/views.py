from django.shortcuts import render

# Create your views here.

def removeDashes(str):
    return " ".join(str.split("-")).capitalize()

def home(request, id):
    return render(request, "article/%s.html" % id, context= {'title' : removeDashes(id)})