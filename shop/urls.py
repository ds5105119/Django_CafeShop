from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static

app_name = 'shop'


from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('order_list/<int:pk>/', views.order_list, name='order_list'),
    path('category/<int:category_id>/', views.show_category, name='show_category'),
    path('product_detail/<int:pk>/', views.product_detail, name='product_detail'),
    path('cart/<int:pk>/', views.cart, name='cart'),
    path('cart/delete/<int:pk>/', views.delete_cart, name='delete_cart'),
    path('cart_or_buy/<int:pk>/', views.cart_or_buy, name='cart_or_buy'),
]
