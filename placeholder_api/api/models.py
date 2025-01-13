from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

class Post(models.Model):
    user = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    body = models.TextField()

class Comment(models.Model):
    post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    body = models.TextField()

class Album(models.Model):
    user = models.ForeignKey(User, related_name="albums", on_delete=models.CASCADE)
    title = models.CharField(max_length=200)

class Photo(models.Model):
    title = models.CharField(max_length=255)
    url = models.URLField()
    thumbnail_url = models.URLField(blank=True, null=True)
    album = models.ForeignKey(Album, related_name='photos', on_delete=models.CASCADE)

class ToDo(models.Model):
    user = models.ForeignKey(User, related_name="todos", on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)