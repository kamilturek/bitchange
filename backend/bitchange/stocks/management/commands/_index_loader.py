import os
from typing import Iterable

from django.db import transaction

from bitchange.stocks.models import Stock


class IndexLoader:
    def load(self, name: str) -> tuple[int, int]:
        """
        Loads tickers from index with provided name
        Returns number of loaded tickers and number of actually created ones
        """
        tickers = self._get_tickers(name)
        created = self._create_tickers(tickers)
        loaded = len(tickers)
        return loaded, created

    def _get_tickers(self, name: str) -> list[str]:
        dirname = os.path.dirname(__file__)
        path = os.path.join(dirname, 'data', name + '.txt')
        with open(path) as f:
            return [ticker.strip() for ticker in f]

    @transaction.atomic
    def _create_tickers(self, tickers: Iterable[str]) -> int:
        """
        Creates stock instances with provided ticker names
        Returns number of actually created instances
        """
        return sum(Stock.objects.get_or_create(ticker=ticker)[1] for ticker in tickers)
