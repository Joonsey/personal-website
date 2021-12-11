from django.contrib import admin


from .models import Post

class PostAdmin(admin.ModelAdmin):
    fields = ['title', 'content', 'date_posted']


admin.site.register(Post, PostAdmin)
# Register your models here.
