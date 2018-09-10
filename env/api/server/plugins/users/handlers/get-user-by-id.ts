import { Server, Request } from 'hapi';

export = (server: Server) => async (req: Request) => {
  const { id } = req.params;
  try {
    const user = await (server.app as any).db.models.User.findById(id).select(
      '-password',
    );
    return user;
  } catch (e) {
    throw e;
  }
};
