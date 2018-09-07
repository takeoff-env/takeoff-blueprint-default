import Boom from 'boom';
import { Server, Request } from 'hapi';

export = (server: Server, options: any) => async (req: Request, h: any) => {
  const { userType } = req.params;

  if (!options.userTypes.includes(userType)) {
    throw Boom.badData(`Unknown user type ${userType}`);
  }

  return h.view('plugins/auth/templates/login.html', {
    userType,
    apiPrefix: (server.settings as any).app.apiPrefix,
  });
};
