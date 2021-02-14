#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset


case "$1" in
    sh)
        docker-compose run --rm web "${@:2}"
    ;;
    manage)
        docker-compose run --rm web python manage.py "${@:2}"
    ;;
    test)
        docker-compose run --rm web pytest "${@:2}"
    ;;
    flake8)
        docker-compose run --rm web flake8
    ;;
    isort)
        docker-compose run --rm web isort -c .
    ;;
    black)
        docker-compose run --rm web black --check .
    ;;
    eslint)
        docker-compose run --rm frontend yarn run lint . --ext .js,.jsx,.ts,.tsx
    ;;
    *)
        echo "ERROR: Unknown operation."  
    ;;
esac
