from rest_framework.viewsets import ModelViewSet
from bus_management.models import Bus
from bus_management.serializers import BusSerializer

class BusViewSet(ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer