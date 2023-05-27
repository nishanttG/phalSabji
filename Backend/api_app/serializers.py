from rest_framework import serializers
from api_app.models import Customer,Category, Products, Order

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'first_name', 'last_name', 'phone', 'email', 'password']


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model= Products
        fields= '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model= Order
        fields='__all__'


   

