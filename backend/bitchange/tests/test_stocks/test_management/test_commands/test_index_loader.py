import pytest

from bitchange.stocks.management.commands._index_loader import IndexLoader
from bitchange.stocks.models import Stock


@pytest.mark.django_db
class TestIndexLoader:
    def test_load(self, mock_index_file):
        loaded, created = IndexLoader().load('')
        stocks = list(Stock.objects.values_list('ticker', flat=True))

        assert loaded == 3
        assert created == 3
        assert stocks == ['AAPL', 'MSFT', 'TSLA']

    def test_load_already_existing(self, mock_index_file):
        Stock.objects.create(ticker='AAPL')
        loaded, created = IndexLoader().load('')
        stocks = list(Stock.objects.values_list('ticker', flat=True))

        assert loaded == 3
        assert created == 2
        assert stocks == ['AAPL', 'MSFT', 'TSLA']
