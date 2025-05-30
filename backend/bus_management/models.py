from django.db import models
import json

class Bus(models.Model):
    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)
    date = models.DateField()
    arrival_time = models.TimeField()
    departure_time = models.TimeField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    seats = models.JSONField(default=dict)  # Stores seat information as a JSON object

    def save(self, *args, **kwargs):
        # Initialize seats only if not already set
        if not self.seats:
            self.seats = {seat: False for seat in self.generate_seat_numbers()}
        super().save(*args, **kwargs)

    def generate_seat_numbers(self):
        # Generate seat numbers A1 to A18, B1 to B18, and 19
        seat_numbers = [f'A{i}' for i in range(1, 19)] + [f'B{i}' for i in range(1, 19)] + ['19']
        return seat_numbers

    def __str__(self):
        return f'{self.from_location} to {self.to_location} on {self.date}'