from django.shortcuts import HttpResponse
from django.shortcuts import render
from .models import Room
from .serializers import RoomSerializer, CreateRoomSerializer
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response



# Create your views here.
class RoomView (generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
class CreatRoomView(APIView):
    serializer_class = CreateRoomSerializer
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            vote_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = vote_to_skip
                room.save(update_fields=["guest_can_pause", "votes_to_skip"])
            else:
                room = Room(host=host, guest_can_pause=guest_can_pause, vote_to_skip=vote_to_skip)
                room.save()
                
            return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)
        
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)