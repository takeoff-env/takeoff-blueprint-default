process.on('unhandledRejection', err => {
  /*eslint-disable */
  console.log(err.stack);
  process.exit(1);
  /*eslint-enable */
});

process.on('uncaughtException', error => {
  /*eslint-disable */
  console.log(error.stack); // to see your exception details in the console
  process.exit(1);
  /*eslint-enable */
});

require('dotenv').config();

const ENV = process.env.NODE_ENV || 'development';
let Config;

try {
  Config = require(`./config/${ENV}.js`);
} catch (e) {
  throw e;
}

const startServer = require('./server');

async function init() {
  let server;
  try {
    server = await startServer(Config, ENV);
    await server.start();
    server.log(['debug', 'startup'], `Server started: ${ENV} - http://${server.info.host}:${server.info.port}`);
  } catch (e) {
    throw e;
  }
}

init();
