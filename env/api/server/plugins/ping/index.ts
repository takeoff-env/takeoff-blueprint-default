import { Server, Request } from 'hapi';

export = {
  name: 'takeoff-ping',
  version: '1.0.0',
  register: async (server: Server) => {
    server.route({
      method: 'GET',
      path: '/ping',
      options: {
        auth: false,
      },
      handler: async function(req: Request, h: any) {
        return h.code(200);
      },
    });
  },
};
