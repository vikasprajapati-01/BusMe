from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from bus_management.views import BusViewSet
from customer_management.views import BookingViewSet, BookSeatsView, CustomerViewSet  # Added CustomerViewSet
from authentication.views import RegisterView

router = DefaultRouter()
router.register('buses', BusViewSet, basename='bus')
router.register('bookings', BookingViewSet, basename='booking')
router.register('customers', CustomerViewSet, basename='customer')  # Registered CustomerViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('api/book-seats/', BookSeatsView.as_view(), name='book_seats'),
    path('api/', include(router.urls)), 
]