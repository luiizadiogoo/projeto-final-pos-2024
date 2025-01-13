from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AlbumPhotosViewSet, PostCommentsViewSet, UserAlbumsViewSet, UserPostsViewSet, UserTodosViewSet, UserViewSet, PostViewSet, CommentViewSet, AlbumViewSet, PhotoViewSet, ToDoViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'albums', AlbumViewSet)
router.register(r'photos', PhotoViewSet)
router.register(r'todos', ToDoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('posts/<int:post_id>/comments/', PostCommentsViewSet.as_view({'get': 'list'})),
    path('albums/<int:album_id>/photos/', AlbumPhotosViewSet.as_view({'get': 'list'})),
    path('users/<int:user_id>/albums/', UserAlbumsViewSet.as_view({'get': 'list'})),
    path('users/<int:user_id>/todos/', UserTodosViewSet.as_view({'get': 'list'})),
    path('users/<int:user_id>/posts/', UserPostsViewSet.as_view({'get': 'list'})),
]