from django.urls import path,include
from .views import RoomView,CreatRoomView

urlpatterns = [
    path("home", RoomView.as_view()),
    path("create-room", CreatRoomView.as_view())
]