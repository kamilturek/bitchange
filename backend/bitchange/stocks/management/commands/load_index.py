from typing import Any

from django.core.management.base import BaseCommand, CommandParser

from ._index_loader import IndexLoader


class Command(BaseCommand):
    help = 'Load given index companies.'

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument('index', nargs='+', type=str)

    def handle(self, *args: Any, **options: Any) -> None:
        for index in options['index']:
            index = index.upper()
            self.stdout.write(f'Loading {index}...')
            loaded, created = IndexLoader().load(index)
            msg = f'Tickers loaded: {loaded}\nTickers created: {created}'
            if created == 0 or created < loaded:
                style = self.style.WARNING
            elif loaded == created:
                style = self.style.SUCCESS
            self.stdout.write(style(msg))
        self.stdout.write(self.style.SUCCESS('Done!'))
