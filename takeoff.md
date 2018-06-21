## takeoff

Run task `npm:install:api` after this

```bash
echo "Installing Takeoff"
```

## npm:install:api

Run task `npm:install:app` after this

```bash
cd env/api && npm install
```

## npm:install:app

Run task `docker:compose` after this

```bash
cd env/frontend-app && npm install
```

## docker:compose

```bash
docker-compose -f docker/docker-compose.yml build --no-cache && docker-compose -f docker/docker-compose.yml up -d db && ${sleep} && docker-compose -f docker/docker-compose.yml stop db
```
