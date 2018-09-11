# Takeoff Basic Blueprint

This blueprint is designed to work with [Takeoff](https://takeoff.sh/) - a set of tool to allow you to rapidly develop prototypes.

The blueprint provides a default configuration that after building, Within seconds you'll have a hot-reloading frontend and backend which allows you to make changes without the need to usually restart the server.

## Default Configuration

### API Server

[Link to docs](./env/api/README.md)

A plugin-based API server powered by Hapi, with nodemon for hot reloading and written in Typescript. To connect to the database it uses [Mongoose](https://mongoosejs.com/) for each development of models. There is a basic User model and admin seed. It also provides an authentication solution using [JSON Web Tokens (JWT)](https://jwt.io/).

There is a set of endpoints for handling users, and it's all tied together with easy configuration and environment variable support.

### Angular Frontend

[Link to docs](./env/app/README.md)

An `ng serve` frontend using Angular and written in Typescript. The app itself composes of a simple login page, and some User crud functions. There is also a NavBar showing how to use the authentication details to show and hide items.

### MongoDB Database

A simple [MongoDB](https://www.mongodb.com/) database to quickly develop an application schema on.

### Ngnix server

A Ngnix server proxying all requests via port 80.

## Layout

You will find several folders and files:

```bash
    -|- takeoff.md # The takeoff task file
     |- env # The place where code and assets are placed that make up your applications
        |- api # This is the Hapi API Server
        |- frontend-app # This is the Angular app
        |- nginx # Nginx configuration
     |- docker # Where the docker configurations are kept
        |- api # This is the Hapi API Server docker config
        |- frontend-app # This is the Angular app docker config
        |- nginx # Nginx docker config
        |- docker-compose.yml # The docker compose file that is used to generate and run the stack
     |- README.md # The file you are looking at!
```

Inside the docker folder and several docker files which create the environments.

The default environments are listed below with the main environments from their docker files.

|name   |packages  |version|description|
|----   |-------   |-------|-----------|
|api    |node      |10.x.x |Hapi-powered API that comes pre-build with a user and authentication plugin, uses nodemon for changes.|
|app    |node      |10.x.x |Angular app that reloads on changes|
|db     |mongodb   |latest |Postgres database|
|server |ngnix     |1.13.x |Ngnix Proxy|

Run via docker compose, you can begin to add plugins to the Hapi server.  You can easily add your own docker images for other services such as redis, memcache, mysql, etc.
