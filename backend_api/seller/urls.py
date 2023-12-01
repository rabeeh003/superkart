from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import SellerProductView, AllProduct, ProductDetails, SellerProductEditView


urlpatterns = [
    path('addproduct/', SellerProductView.as_view(), name='addproduct'),
    path('editproduct/<int:pk>/update/', SellerProductEditView.as_view(), name='addproduct'),
    path('shopproducts/', AllProduct.as_view(), name='allproduct'),
    path('shopproducts/<int:pk>/', ProductDetails.as_view(), name='productdtl')

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
