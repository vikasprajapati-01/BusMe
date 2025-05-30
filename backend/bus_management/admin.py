from django.contrib import admin
from bus_management.models import Bus

@admin.register(Bus)
class BusAdmin(admin.ModelAdmin):
    list_display = ('from_location', 'to_location', 'date', 'arrival_time', 'departure_time', 'amount', 'total_seats', 'booked_seats')
    search_fields = ('from_location', 'to_location')
    list_filter = ('date', 'from_location', 'to_location')

    def total_seats(self, obj):
        # Count the total number of seats
        return len(obj.seats)

    def booked_seats(self, obj):
        # Count the number of seats that are booked
        return sum(1 for seat in obj.seats.values() if seat)

    total_seats.short_description = 'Total Seats'
    booked_seats.short_description = 'Booked Seats'