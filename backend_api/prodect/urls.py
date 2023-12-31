from .views import GlobalProduct, GlobalCategory, ProductDetailView
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('gpro/', GlobalProduct.as_view(), name='gpro'),
    path('gpro/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('gcategory/', GlobalCategory.as_view(), name='gcategory'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

