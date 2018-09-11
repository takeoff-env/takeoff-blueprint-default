import './bootstrap';
import startServer from './server';

import { Manifest } from 'glue';

const ENV = process.env.NODE_ENV || 'development';
let Config: Manifest;

try {
  Config = require(`./config/${ENV}.ts`);
} catch (e) {
  throw e;
}

async function run() {
  let server;
  try {
    server = await startServer(Config, ENV);
    await server.start();
    server.log(
      ['debug', 'startup'],
      `Server started: ${ENV} - http://${server.info.host}:${server.info.port}`,
    );
  } catch (e) {
    throw e;
  }
}

run();
