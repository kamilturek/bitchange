from io import StringIO
from unittest.mock import patch

from django.core.management import call_command


class TestLoadIndex:
    @patch('bitchange.stocks.management.commands._index_loader.IndexLoader.load')
    def test_load_index(self, m_load):
        m_load.return_value = 2, 1
        out = StringIO()
        call_command('load_index', 'NASDAQ', stdout=out)
        stdout = out.getvalue()

        assert m_load.call_count == 1
        assert m_load.call_args == (('NASDAQ',),)
        assert 'Tickers loaded: 2' in stdout
        assert 'Tickers created: 1' in stdout
        assert 'Done!' in stdout
