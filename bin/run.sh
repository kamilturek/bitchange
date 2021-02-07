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
        docker-compose -f "$ROOT_DIR"/docker-compose-test.yml run --rm test_web "${@:2}"
    ;;
    *)
        echo "ERROR: Unknown operation."  
    ;;
esac
