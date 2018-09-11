## npm:install:api

Run task `npm:install:app` after this

```bash
cd env/api && npm install --silent
```

## npm:install:app

Run task `docker:compose` after this

```bash
cd env/frontend-app && npm install --silent
```

## docker:compose

```bash
docker-compose -f docker/docker-compose.yml build --no-cache
```
