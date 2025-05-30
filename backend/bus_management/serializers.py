from rest_framework import serializers
from bus_management.models import Bus

class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = ['id', 'from_location', 'to_location', 'date', 'arrival_time', 'departure_time', 'amount', 'seats']