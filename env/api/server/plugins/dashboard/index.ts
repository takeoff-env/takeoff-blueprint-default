import { Server, Request } from 'hapi';

export = {
  name: 'takeoff-dashboard',
  version: '1.0.0',
  register: async (server: Server) => {
    server.route({
      method: 'GET',
      path: '/dashboard',
      options: {
        auth: {
          scope: ['admin'],
        },
      },
      handler: async (req: Request, h: any) => {
        h.view('plugins/dashboard/views/index.html', {
          apiPrefix: (server.settings.app as any).apiPrefix,
        });
      },
    });
  },
};
