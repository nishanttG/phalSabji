
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from api_app.views import CustomerViewSet,CategoryViewSet,ProductViewSet, OrderViewSet


router =routers.DefaultRouter()

router.register(r'customer',CustomerViewSet)
router.register(r'category',CategoryViewSet)
router.register(r'product',ProductViewSet)
router.register(r'order',OrderViewSet)


urlpatterns = [
      
   
    path('', include(router.urls)),
]

    
