from django.urls import path
from . import views
from django.conf import settings
# Create your views here.
urlpatterns = [
    path('', views.IdeaListView.as_view(), name='crowdfounder'),
    path('add-object/', views.IdeaCreateView.as_view(), name="add-object"),
    path('increase-vote/<int:pk>/', views.increaseVote, name='increase-vote')
]




from django.conf import settings
from django.conf.urls.static import static
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)