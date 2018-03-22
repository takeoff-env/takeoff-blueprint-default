# Takeoff Basic Blueprint

This blueprint is designed to work with [Takeoff](https://takeoff.sh/) - a set of tool to allow you to rapidly develop prototypes.

The blueprint provides a default configuration that after building, Within seconds you'll have a hot-reloading frontend and backend which allows you to make changes without the need to usually restart the server.

## Default Configuration

### API Server

[Link to docs](./env/api/README.md)

A plugin-based API server powered by Hapi, with nodemon for hot reloading. To connect to the database it uses [Sequelize](http://docs.sequelizejs.com/) which allows the support of [migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html) (see docs for information on how to add your models). It also provides an authentication solution using [JSON Web Tokens (JWT)](https://jwt.io/).

There is a set of endpoints for handling users, and it's all tied together with easy configuration and environment variable support.

### React Frontend

[Link to docs](./env/app/README.md)

A webpack hot reloading React frontend including React Router v4 and Redux. The app is set up with [webpack] and [babel] preconfigured to support ES6. The app itself composes of a simple login page, and some User crud functions. There is also a NavBar showing how to use the authentication details to show and hide items.

### Postgres Database

A Postgres database and a Sequelize adapter available in the API to interact with it.

### Ngnix server

A Ngnix server proxying all requests via port 80.

## Layout

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

Inside the docker folder are several docker files which create the environments.

The default environments are listed below with the main environments from their docker files.

|name   |packages  |version|description|
|----   |-------   |-------|-----------|
|api    |node      |8.x.x  |Hapi-powered API that comes pre-build with a user and authentication plugin, uses nodemon for changes.|
|app    |node      |8.x.x  |Webpack/React app that is hot-reloaded on changes|
|db     |postgres  |9.6    |Postgres database|
|server |ngnix     |1.13.x |Ngnix Proxy|

Run via docker compose, you can begin to add plugins to the Hapi server.  You can easily add your own docker images for other services such as redis, memcache, mysql, etc.
