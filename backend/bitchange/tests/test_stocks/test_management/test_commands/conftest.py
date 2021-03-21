from unittest.mock import mock_open, patch

import pytest


@pytest.fixture
def mock_index_file():
    data = 'AAPL\nMSFT\nTSLA'
    m_open = mock_open(read_data=data)
    with patch('bitchange.stocks.management.commands._index_loader.open', m_open):
        yield
