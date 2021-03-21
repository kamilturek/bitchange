from django.db import models


class Stock(models.Model):
    ticker = models.CharField(max_length=10, unique=True)


class StockPrice(models.Model):
    stock = models.ForeignKey(Stock, related_name='prices', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    price = models.DecimalField(max_digits=12, decimal_places=4)
