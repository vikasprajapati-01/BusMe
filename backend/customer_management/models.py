from django.db import models
from authentication.models import CustomUser
from bus_management.models import Bus

class Booking(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    seats = models.JSONField()  # List of selected seats (e.g., ["A1", "A2"])

    def save(self, *args, **kwargs):
        bus = self.bus

        # Check if seats are available
        for seat in self.seats:
            if bus.seats.get(seat):  # If seat is already booked
                raise ValueError(f"Seat {seat} is already booked.")

        # Update seat status in the bus
        bus.seats.update({seat: True for seat in self.seats})
        bus.save()

        super().save(*args, **kwargs)

    def __str__(self):
        return f'Booking by {self.user.username} on {self.bus}'