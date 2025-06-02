from django.urls import path
from .views import BusSearchView, SeatBookingView, CreateBusView, AllBusesView

urlpatterns = [
    path('search/', BusSearchView.as_view(), name='search_buses'),
    path('book/', SeatBookingView.as_view(), name='book_seat'),
    path('create-bus/', CreateBusView.as_view(), name='create_bus'),
    path('all-buses/', AllBusesView.as_view(), name='all-buses'),
]