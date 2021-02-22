# Development Guide

## Common

Downloading environment files

```bash
./bin/init.py
```

## Backend

Running backend server

```bash
docker-compose up -d web
```

Running `manage.py` commands

```bash
./bin/run.sh manage COMMAND [ARGS ...]

# Examples
./bin/run.sh manage showmigrations
./bin/run.sh manage createsuperuser
```

Running tests

```bash
./bin/run.sh test [ARGS ...]

# Examples
./bin/run.sh test -sv
./bin/run.sh test bitchange/users/tests/
```

Running shell commands

```bash
./bin/run.sh sh COMMAND [ARGS ...]

# Examples
./bin/run.sh env
./bin/run.sh ls -la /app
```

Running flake8

```bash
./bin/run.sh flake8
```

Running isort (check only)

```bash
./bin/run.sh isort
```

Running black (check only)

```bash
./bin/run.sh black
```

## Frontend

Running frontend server

```bash
docker-compose up -d frontend
```

Running ESLint (typescript-eslint)

```bash
./bin/run.sh eslint
```
