module.exports = {
  name: 'ed-dashboard',
  version: '1.0.0',
  register: async server => {
    server.route({
      method: 'GET',
      path: '/dashboard',
      config: {
        auth: {
          scope: ['admin']
        }
      },
      handler: (req, h) => {
        h.view('plugins/dashboard/views/index.html', {
          apiPrefix: server.settings.app.apiPrefix
        });
      }
    });
  }
};
