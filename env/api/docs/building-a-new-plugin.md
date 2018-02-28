# Building a new Takeoff API Plugin

[Home](../../README.md) | [API](../README.md)

Takeoff uses Hapi as it's framework to build server-side services. Functionality is added via plugins which are defined in the `api/server/plugins`
folder, and whitelisted via a config file.

## Plugin structure

Plugins provide a way to create logical units of code. First, create your folder.  Here we'll create a simple `hello-world` plugin.

> $ `cd api/server/plugins`
>
> $ `mkdir hello-world && touch hello-world/index.js`

In our index file, we create the following plugin registration file:

```js
module.exports = {
    name: 'my-plugin',
    version: '1.0.0',
    register: async server => {
        server.route({
            method: 'GET',
            path: '/my-plugin',
            config: {
                auth: false
            },
            handler: async function(req) {
                try {
                    const dbError = await req.server.app.db.MyModel.getAll()
                    if (!dbError) {
                        return 'OK';
                    }
                    throw dbError;
                } catch (e) {
                    throw e;
                }
            }
        });
    }
};
```

Next, open `api/config/development.js`, and find the line that says `baseConfig.registrations.push`.  At the bottom of the parameters, add:

```js
const baseConfig = require('./_base');

const newConfig = Object.assign({}, baseConfig);

newConfig.register.plugins.push(
  './plugin-1',
  {
    plugin: './my-plugin',
    options: {
      key: 'foo',
      options: ['foo', 'bar']
    }
  },
  './users',
  './dashboard'
);

module.exports = newConfig;
```

Now you can visit [http://localhost/api/hello-world](http://localhost/api/hello-world) - and as you can see, you haven't had to restart any server manually, it just works.


## Reference

* [Hapi Plugin Documentation](https://hapijs.com/tutorials/plugins)
