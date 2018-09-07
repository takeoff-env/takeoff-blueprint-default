import Boom from 'boom';
import jwt from 'jsonwebtoken';
import { checkPassword } from '../../users/utils';
import { Server, Request } from 'hapi';

export = (server: Server, options: any) => async (req: Request, h: any) => {
  const { userType } = req.params;
  const { username, password } = req.payload as any;
  const { privateKey, algorithm, tokenExpiry, cookieName } = options;

  if (!options.userTypes.includes(userType)) {
    throw Boom.badData(`Unknown user type ${userType}`);
  }

  try {
    const user = await (server.app as any).db.models.User.findOne({
      username,
    });
    //const user = await server.app.db.User.findOne({ where: { username } });
    if (!user) {
      throw Boom.unauthorized('Username or password do not match');
    }
    const validPassword = await checkPassword(password, user.password);
    if (!validPassword) {
      throw Boom.unauthorized('Username or password do not match');
    }

    const { id, displayName } = user;

    const token = jwt.sign(
      {
        id,
        username,
        displayName,
        scope: userType,
      },
      privateKey,
      {
        algorithm,
        expiresIn: tokenExpiry,
      },
    );
    h.state(cookieName, token);
    return {
      token,
    };
  } catch (e) {
    throw e;
  }
};
