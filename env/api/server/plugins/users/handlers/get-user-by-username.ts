import { Server, Request } from 'hapi';

export = (server: Server) => async (req: Request) => {
  const { username } = req.params;
  try {
    const user = await (server.app as any).db.models.User.findOne({ username }).select(
      '-password',
    );
    return user;
  } catch (e) {
    throw e;
  }
};
