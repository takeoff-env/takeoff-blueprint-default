import { Server, Request } from 'hapi';

export = (server: Server) => async (req: Request) => {
  const { limit, offset } = req.query as any;

  try {
    const users = await (server.app as any).db.models.User.find()
      .select('-password')
      .skip(offset * limit)
      .limit(limit);
    return users;
  } catch (e) {
    throw e;
  }
};
