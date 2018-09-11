import { Server, Request } from 'hapi';
import { hashPassword } from '../utils';

export = (server: Server) => async (req: Request) => {
  let { password } = req.payload as any;
  if (password) {
    password = await hashPassword(password);
  }
  try {
    const result = await (server.app as any).db.models.User.updateOne(
      { id: req.params.id },
      { password },
    );
    return { success: true, result };
  } catch (e) {
    throw e;
  }
};
