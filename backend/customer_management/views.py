from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import transaction
from customer_management.models import Booking
from customer_management.serializers import BookingSerializer
from bus_management.models import Bus
from rest_framework.viewsets import ModelViewSet
import logging
from customer_management.models import Customer
from customer_management.serializers import CustomerSerializer

logger = logging.getLogger(__name__)

class BookingViewSet(ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class BookSeatsView(APIView):
    def post(self, request):
        # Validate input data
        bus_id = request.data.get('bus_id')
        seats = request.data.get('seats')
        user = request.user  # Fetch authenticated user

        if not user or not user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)

        if not bus_id or not seats:
            return Response({'error': 'bus_id and seats are required'}, status=status.HTTP_400_BAD_REQUEST)

        # Fetch bus object
        try:
            bus = Bus.objects.get(id=bus_id)
        except Bus.DoesNotExist:
            return Response({'error': 'Bus not found'}, status=status.HTTP_404_NOT_FOUND)

        # Validate seat format and availability
        invalid_seats = [seat for seat in seats if seat not in bus.seats]
        if invalid_seats:
            return Response({'error': f'Invalid seats: {", ".join(invalid_seats)}'}, status=status.HTTP_400_BAD_REQUEST)

        already_booked_seats = [seat for seat in seats if bus.seats.get(seat)]
        if already_booked_seats:
            return Response({'error': f'Seats already booked: {", ".join(already_booked_seats)}'}, status=status.HTTP_400_BAD_REQUEST)

        # Ensure the number of seats booked does not exceed bus capacity
        if len(seats) > len(bus.seats):
            return Response({'error': 'Cannot book more seats than available capacity'}, status=status.HTTP_400_BAD_REQUEST)

        # Perform booking within a transaction
        try:
            with transaction.atomic():
                # Mark seats as booked
                bus.seats.update({seat: True for seat in seats})
                bus.save()

                # Create booking
                booking = Booking.objects.create(user=user, bus=bus, seats=seats)

            return Response({
                'message': 'Seats booked successfully',
                'booking': BookingSerializer(booking).data,
                'bus_details': {
                    'from_location': bus.from_location,
                    'to_location': bus.to_location,
                    'date': bus.date,
                    'departure_time': bus.departure_time,
                    'arrival_time': bus.arrival_time
                }
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            logger.error(f"Error occurred during booking: {str(e)}")
            return Response({'error': f'An error occurred: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CustomerViewSet(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer