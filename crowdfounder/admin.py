from django.contrib import admin

# Register your models here.
from .models import Idea

class IdeaAdmin(admin.ModelAdmin):
    fields = ['header', 'description', 'date_posted', 'votes','author_mail']


admin.site.register(Idea, IdeaAdmin)