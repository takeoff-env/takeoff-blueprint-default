# Takeoff Basic Blueprint

This Blueprint is the first one released for Takeoff.  When you install Takeoff, it will immediately clone
this repository into it's default environment.

You will find several folders and files:

```bash
    -|
     |- env # The place where code and assets are placed that make up your applications
        |- api # This is the Hapi API Server
        |- app # This is the frontend app
        |- nginx # Nginx configuration
        |- db # Postgres DB config
     |- docker # Where the docker configurations are kept
        |- api # This is the Hapi API Server docker config
        |- app # This is the frontend app docker config
        |- nginx # Nginx docker config
        |- db # Postgres DB docker config
        |- docker-compose.yml # The docker compose file that is used to generate and run the stack
     |- README.md # The file you are looking at!
```

Inside the docker folder and several docker files which create the environments.

The default environments are listed below with the main environments from their docker files.

|name   |packages  |version|description|
|----   |-------   |-------|-----------|
|api    |node      |8.5.0  |Hapi-powered API that comes pre-build with a user and authentication plugin, uses nodemon for changes.|
|app    |node      |8.5.0  |Webpack/React app that is hot-reloaded on changes|
|db     |postgres  |9.6    |Postgres database|
|server |ngnix     |1.13.x |Ngnix Proxy|

Run via docker compose, you can begin to add plugins to the Hapi server.  You can easily add your own docker images for other services such as redis, memcache, mysql, etc.

## Documentation

* [API](./env/api/README.md)
* [App](./env/app/README.md)
