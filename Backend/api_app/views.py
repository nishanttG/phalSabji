from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
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
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        cart_array = request.data.get('cartItems', [])
        success = True  # Flag to track overall success

        for order_data in cart_array:
            serializer = self.get_serializer(data=order_data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                order_instance = serializer.instance
                order_instance.placeOrder()  
            else:
                success = False  

        if success:
            return Response({'message': 'Orders created successfully'})
        else:
            return Response({'message': 'Failed to create one or more orders. Please check your input.'})


