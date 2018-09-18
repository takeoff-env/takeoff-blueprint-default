## npm:install:api

Run task `npm:install:app` in parallel

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
takeoff build -n
```
