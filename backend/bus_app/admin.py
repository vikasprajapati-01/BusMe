from django.contrib import admin
from .models import Bus, Seat, Booking

@admin.register(Bus)
class BusAdmin(admin.ModelAdmin):
    list_display = ['from_location', 'to_location', 'date', 'departure_time', 'arrival_time', 'price']

@admin.register(Seat)
class SeatAdmin(admin.ModelAdmin):
    list_display = ['bus', 'seat_number', 'is_booked']

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['fullname', 'email', 'phone_number', 'pickup_location']