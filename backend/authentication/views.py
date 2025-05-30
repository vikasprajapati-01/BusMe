from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from authentication.models import CustomUser
from authentication.serializers import CustomUserSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response({'errors': serializer.errors, 'message': 'Registration failed'}, status=status.HTTP_400_BAD_REQUEST)