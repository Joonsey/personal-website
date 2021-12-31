from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone
from django.urls import reverse


class Idea(models.Model):
    header = models.CharField(max_length=40)
    description = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author_mail = models.EmailField()
    votes = models.PositiveBigIntegerField()

    def __str__(self):
        return str(self.header)


