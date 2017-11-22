const baseConfig = require('./_base');

const newConfig = Object.assign({}, baseConfig);

newConfig.register.plugins.push(
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
      userTypes: ['admin', 'user']
    }
  },
  './users',
  './dashboard'
);

module.exports = newConfig;
