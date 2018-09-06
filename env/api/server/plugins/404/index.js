module.exports = {
  name: 'takeoff-404',
  version: '1.0.0',
  register: async server => {
    server.route({
      method: ['GET', 'POST', 'PUT', 'DELETE'],
      path: '/{path*}',
      config: {
        auth: false,
      },
      handler: (req, h) => {
        const accept = req.raw.req.headers.accept;
        if (accept && accept.match(/json/)) {
          throw new Error('Whoops, this resource is not available');
        }

        return h.view('views/404').code(404);
      },
    });
  }
};
