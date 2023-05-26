from django.shortcuts import render
from rest_framework import viewsets
from api_app.models import  Customer, Category, Products, Order
from api_app.serializers import  CustomerSerializer, CategorySerializer, ProductSerializer,OrderSerializer
# Create your views here.

class CustomerViewSet(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset=Products.objects.all()
    serializer_class=ProductSerializer
    
class OrderViewSet(viewsets.ModelViewSet):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer


