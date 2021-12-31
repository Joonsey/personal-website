from django.shortcuts import render


def home(request):
    context = {'lul':'lule'}
    return render(request, 'blog/home.html', context)



