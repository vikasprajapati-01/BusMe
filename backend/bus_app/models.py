from django.db import models

# Bus Model
class Bus(models.Model):
    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)
    date = models.DateField()
    departure_time = models.TimeField()
    arrival_time = models.TimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.from_location} to {self.to_location} on {self.date}"

# Seat Model
class Seat(models.Model):
    SEAT_CHOICES = [(f"A{i}", f"A{i}") for i in range(1, 19)] + \
                   [(f"B{i}", f"B{i}") for i in range(1, 19)] + [("19", "19")]
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE, related_name='seats')
    seat_number = models.CharField(max_length=3, choices=SEAT_CHOICES)
    is_booked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.seat_number} - {'Booked' if self.is_booked else 'Available'}"

# Booking Model
class Booking(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    seat = models.ForeignKey(Seat, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    alternative_phone_number = models.CharField(max_length=15, blank=True, null=True)
    pickup_location = models.CharField(max_length=255)

    def __str__(self):
        return f"Booking by {self.fullname} for {self.bus}"