# 토이 프로젝트 카페(쇼핑몰) 프로젝트

## 개발인원 : 개인
## 개발기간 : 2024/06.01~2024/06.31
## 프로젝트 소개 
이 Django 프로젝트는 사용자 인증, 상품 관리, 장바구니 기능, 주문 처리, 블로그 포스트, 그리고 사용자 프로필을 포함한 전자 상거래 플랫폼입니다. 주요 기능으로는 다음과 같습니다:

-사용자는 카테고리별로 상품을 조회할 수 있습니다.
-장바구니에 상품을 추가하거나 바로 주문할 수 있습니다.
-관리자는 상품을 등록하고 관리할 수 있습니다.
-사용자는 프로필 페이지에서 개인 정보를 관리할 수 있습니다.
-이 프로젝트는 Django의 ORM을 사용하여 데이터베이스와 상호작용하며, 페이지네이션을 통해 대용량 데이터를 효과적으로 처리합니다. 코드는 가독성을 고려하여 작성되었으며, 사용 
 자 경험을 중시하는 디자인을 채택하고 있습니다.
 
- Category
```python
class Category(models.Model):
    sort = models.CharField(max_length=255)

    def __str__(self):
        return '{}'.format(self.sort)
```

- Product
```python
  class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = ImageField(upload_to='photos/', blank=True, null=True)
    price = models.IntegerField()
    quantity = models.IntegerField(default=0)
    description = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    hit = models.IntegerField(default=0)

    def __str__(self):
        return '{} {}'.format(self.name, self.pub_date)
```

- Point
```python
  class Point(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,)
    all_point = models.IntegerField()
    able_point = models.IntegerField()
  
```

- Cart
```python
  class Cart(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,)
    products = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='wish_product', blank=True)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return '{} // {}'.format(self.user, self.products.name)
```

- Post
```python
class Post(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{} by {}'.format(self.title, self.author)
```

- Order
```python
class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,)
    name = models.CharField(max_length=100, verbose_name='상품명')
    amount = models.PositiveIntegerField(verbose_name='결제금액')
    quantity = models.IntegerField(default=1)
    products = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_product')
    order_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-id',)

    def __str__(self):
        return '{} by {}'.format(self.products.name, self.user)
```

