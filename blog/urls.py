from django.urls import path
from .views import PostListView, PostDetailView #, PostCreateView, PostUpdateView
from . import views

urlpatterns = [
    path('', PostListView.as_view(), name="blog-home"),
    path('post/<int:pk>/', PostDetailView.as_view(), name="post-detail"),
    #path('post/new/', PostCreateView.as_view(), name="post-create"),
    #path('post/<int:pk>/update', PostUpdateView.as_view(), name="post-update"),
    path('about/', views.about, name="blog-about"),
]


from django.conf import settings
from django.conf.urls.static import static
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)