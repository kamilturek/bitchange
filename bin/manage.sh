#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset


docker-compose run --rm web python manage.py "$@"
