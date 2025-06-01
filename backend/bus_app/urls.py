from django.urls import path
from .views import BusSearchView, SeatBookingView, CreateBusView

urlpatterns = [
    path('search/', BusSearchView.as_view(), name='search_buses'),
    path('book/', SeatBookingView.as_view(), name='book_seat'),
    path('create-bus/', CreateBusView.as_view(), name='create_bus'),
]