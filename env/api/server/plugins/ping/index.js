module.exports = {
  name: 'ed-ping-uptime',
  version: '1.0.0',
  register: async server => {
    server.route({
      method: 'GET',
      path: '/ping',
      config: {
        auth: false
      },
      handler: async function (req, h) {
        return h.code(200);
      }
    });
  }
};
