const Glue = require('glue');
const Path = require('path');
const handlebars = require('handlebars');
const mongoose = require('mongoose');
const models = require('../database');

const createServer = async function createServer(config, env) {
  try {
    const server = await Glue.compose(
      config, {
        relativeTo: Path.resolve(`${__dirname}/plugins`)
      },
    );

    server.views({
      engines: {
        html: handlebars,
      },
      path: `${__dirname}/`,
      layoutPath: `${__dirname}/views/layout`,
      layout: 'default',
    });

    const mg = mongoose.connect('mongodb://db');
    server.app.db = {
      mg,
      connection: mg.connection,
      models
    }
    server.app.models = models;

    mg.connection.on('error', error => server.log(['error', 'mongoose'], error, Date.now()));
    mg.connection.on('open', () =>
      server.log(['debug', 'mongoose'], 'Database Connection Established mongodb://db', Date.now())
    );

    server.state('takeoff-auth', server.settings.app.cookieSettings);

    // If in the development environment we want to check all request and response types
    if (env === 'development') {
      server.ext('onRequest', (__req, reply) => {
        server.log(['debug', 'request'], 'Incoming request', Date.now());
        return reply.continue();
      });
      server.on('response', () => {
        server.log(['debug', 'request'], 'Request finished', Date.now());
      });
    }

    return server;
  } catch (e) {
    throw e;
  }
};

module.exports = createServer;
