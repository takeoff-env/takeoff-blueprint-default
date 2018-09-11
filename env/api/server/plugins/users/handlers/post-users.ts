const { hashPassword } = require('../utils');

import { Server, Request } from 'hapi';

export = (server: Server) => async (req: Request) => {
  const { username, password, role, displayName } = req.payload as any;

  try {
    const hashedPassword = await hashPassword(password);
    const userObject = {
      role,
      username,
      password: hashedPassword,
      displayName,
    };

    const newUser = new (server.app as any).db.models.User(userObject);
    const data = await newUser.save();

    return { success: true, data };
  } catch (e) {
    throw e;
  }
};
