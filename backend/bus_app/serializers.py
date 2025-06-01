from rest_framework import serializers
from .models import Bus, Seat, Booking

class BusSerializer(serializers.ModelSerializer):
    seats = serializers.StringRelatedField(many=True)

    class Meta:
        model = Bus
        fields = ['id', 'from_location', 'to_location', 'date', 'departure_time', 'arrival_time', 'price', 'seats']

class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seat
        fields = ['id', 'seat_number', 'is_booked']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'bus', 'seat', 'fullname', 'email', 'phone_number', 'alternative_phone_number', 'pickup_location']