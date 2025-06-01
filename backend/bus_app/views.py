from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from rest_framework import status
from .models import Bus, Seat, Booking
from .serializers import BusSerializer, BookingSerializer
from django.shortcuts import get_object_or_404

class CreateBusView(APIView):
    def post(self, request):
        serializer = BusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BusSearchView(APIView):
    permission_classes = [AllowAny]  # No authentication required for searching buses

    def get(self, request):
        from_location = request.query_params.get('from')
        to_location = request.query_params.get('to')
        date = request.query_params.get('date')

        buses = Bus.objects.filter(from_location=from_location, to_location=to_location, date=date)
        serializer = BusSerializer(buses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class SeatBookingView(APIView):
    permission_classes = [IsAuthenticated]  # Authentication required for booking a seat

    def post(self, request):
        data = request.data
        bus_id = data.get('bus_id')
        seat_number = data.get('seat_number')
        fullname = data.get('fullname')
        email = data.get('email')
        phone_number = data.get('phone_number')
        alternative_phone_number = data.get('alternative_phone_number', None)
        pickup_location = data.get('pickup_location')

        bus = get_object_or_404(Bus, id=bus_id)
        seat = get_object_or_404(Seat, bus=bus, seat_number=seat_number, is_booked=False)

        seat.is_booked = True
        seat.save()

        booking = Booking.objects.create(
            bus=bus,
            seat=seat,
            fullname=fullname,
            email=email,
            phone_number=phone_number,
            alternative_phone_number=alternative_phone_number,
            pickup_location=pickup_location
        )

        serializer = BookingSerializer(booking)
        return Response(serializer.data, status=status.HTTP_201_CREATED)