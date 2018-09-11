import Boom from 'boom';
import { Server, Request } from 'hapi';

export = (server: Server) => async (req: Request) => {
  const { id } = req.params;

  if (id === (req.auth.credentials as any).id) {
    throw Boom.badRequest('You cannot delete yourself');
  }

  try {
    const result = await (server.app as any).db.models.User.deleteOne({ id });

    if (!result) {
      throw new Error('There has been an error deleting this user');
    }

    return { success: true, result };
  } catch (e) {
    throw e;
  }
};
