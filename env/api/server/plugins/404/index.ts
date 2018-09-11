import { Request, Server } from 'hapi';

module.exports = {
  name: 'takeoff-404',
  version: '1.0.0',
  register: async (server: Server) => {
    server.route({
      method: ['GET', 'POST', 'PUT', 'DELETE'],
      path: '/{path*}',
      options: {
        auth: false,
      },
      handler: async (req: Request, h: any) => {
        const accept = req.raw.req.headers.accept;
        if (accept && accept.match(/json/)) {
          throw new Error('Whoops, this resource is not available');
        }

        return h.view('views/404').code(404);
      },
    });
  },
};
