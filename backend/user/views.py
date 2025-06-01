from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@method_decorator(csrf_exempt, name='dispatch')
class LoginView(View):
    def post(self, request):
        try:
            # Parse JSON data from request
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            # Validate inputs
            if not email or not password:
                return JsonResponse({'error': 'Email and password are required'}, status=400)

            # Authenticate user
            user = authenticate(request, email=email, password=password)
            if user:
                login(request, user)
                return JsonResponse({'message': 'Login successful'}, status=200)
            return JsonResponse({'error': 'Invalid email or password'}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid request format'}, status=400)