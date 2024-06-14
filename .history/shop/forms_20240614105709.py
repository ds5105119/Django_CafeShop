from django import forms
from .models import Order, Product

class ProductForm(forms.ModelForm): # ModelForm 은 장고 모델 폼
    class Meta: # 장고 모델 폼은 반드시 내부에 Meta 클래스 가져야 함
        model = Product
        fields = ['pcode', 'pname', 'unitprice', 'discountrate', 'mainfunc', 'detailfunc', 'imgfile']
        labels = {
            'pcode': '제품 코드 ',
            'pname': '제 품 명 ',
            'unitprice': '단    가 ',
            'discountrate': '할 인 율 ',
            'mainfunc': '주요 기능',
            'detailfunc': '상세 기능',
            'imgfile': '이 미 지'
        }

class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['name', 'amount', 'quantity']
        widgets = {
            'name': forms.TextInput(attrs={'readonly': 'readonly'}),
            'amount': forms.TextInput(attrs={'readonly': 'readonly'}),
            'quantity': forms.TextInput(attrs={'readonly': 'readonly'}),
        }