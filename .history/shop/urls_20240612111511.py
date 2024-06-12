from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from . import views
from django.conf.urls.static import static

app_name = 'shop'

from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^profile/(?P<pk>[0-9]+)/$', views.profile, name='profile'),
    re_path(r'^profile/(?P<pk>[0-9]+)/order_list/$', views.order_list, name='order_list'),
    path('notice/', views.notice, name='notice'),
    re_path(r'^notice/(?P<pk>[0-9]+)/$', views.notice_detail, name='notice_detail'),
    re_path(r'^(?P<category_id>[0-9]+)/$', views.show_category, name='show_category'),
    re_path(r'^detail/(?P<pk>[0-9]+)/$', views.product_detail, name='product_detail'),
    re_path(r'^(?P<pk>[0-9]+)/cart_or_buy$', views.cart_or_buy, name='cart_or_buy'),
    re_path(r'^cart/(?P<pk>[0-9]+)/$', views.cart, name='cart'),
    re_path(r'^cart/(?P<pk>[0-9]+)/delete$', views.delete_cart, name='delete_cart'),
]
