from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from .models import User, Post, Comment, Album, Photo, ToDo
from .serializers import UserSerializer, PostSerializer, CommentSerializer, AlbumSerializer, PhotoSerializer, ToDoSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class AlbumViewSet(ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class PhotoViewSet(ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer




class PostCommentsViewSet(ViewSet):
    def list(self, request, post_id=None):
        try:
            post = Post.objects.get(pk=post_id)
            comments = post.comments.all()
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=status.HTTP_404_NOT_FOUND)


class AlbumPhotosViewSet(ViewSet):
    def list(self, request, album_id=None):
        try:
            album = Album.objects.get(pk=album_id)
            photos = album.photos.all()
            serializer = PhotoSerializer(photos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Album.DoesNotExist:
            return Response({"error": "Album not found"}, status=status.HTTP_404_NOT_FOUND)

class UserAlbumsViewSet(ViewSet):
    def list(self, request, user_id=None):
        try:
            user = User.objects.get(pk=user_id)
            albums = user.albums.all()
            serializer = AlbumSerializer(albums, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

class UserTodosViewSet(ViewSet):
    def list(self, request, user_id=None):
        try:
            user = User.objects.get(pk=user_id)
            todos = user.todos.all()
            serializer = ToDoSerializer(todos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

class UserPostsViewSet(ViewSet):
    def list(self, request, user_id=None):
        try:
            user = User.objects.get(pk=user_id)
            posts = user.posts.all()
            serializer = PostSerializer(posts, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)