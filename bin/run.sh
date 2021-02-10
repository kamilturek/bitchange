#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

ROOT_DIR="$(dirname "$(dirname "$(realpath "$0")")")"


case "$1" in
    manage)
        docker-compose run --rm web python manage.py "${@:2}"
    ;;
    test)
        docker-compose run --rm web pytest "${@:2}"
    ;;
    *)
        echo "ERROR: Unknown operation."  
    ;;
esac
