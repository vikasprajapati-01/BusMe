from rest_framework import serializers
from customer_management.models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'user', 'bus', 'seats']