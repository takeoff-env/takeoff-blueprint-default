import { Manifest } from 'glue';
import baseConfig from './_base';

const newConfig: Manifest = Object.assign({}, baseConfig);

const newPlugins = [
  './ping',
  {
    plugin: './auth',
    options: {
      privateKey: process.env.AUTH_PRIVATE_KEY || 'change-me',
      tokenExpiry: 3600,
      maxAge: '1h',
      cookieName: 'auth-cookie',
      algorithm: 'HS256',
      algorithms: ['HS256'],
      userTypes: ['admin', 'user'],
    },
  },
  './users',
  './dashboard',
];

newConfig.register.plugins = (newConfig.register.plugins as Array<any>).concat(
  newPlugins,
);

export = newConfig;
