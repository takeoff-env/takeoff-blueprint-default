const Boom = require('boom');
const jwt = require('jsonwebtoken');
const { checkPassword } = require('../../users/utils');

const User = require('../../../../database/models/user');

module.exports = (server, options) => {
  return async function(req, h) {
    const { userType } = req.params;
    const { username, password } = req.payload;
    const { privateKey, algorithm, tokenExpiry, cookieName } = options;

    if (!options.userTypes.includes(userType)) {
      throw Boom.badData(`Unknown user type ${userType}`);
    }

    try {
      const user = await User.findOne({ username });
      //const user = await server.app.db.User.findOne({ where: { username } });
      if (!user) {
        throw Boom.unauthorized('Username or password do not match');
      }
      const validPassword = await checkPassword(password, user.password);
      if (!validPassword) {
        throw Boom.unauthorized('Username or password do not match');
      }

      const { id, displayName } = user;

      const token = jwt.sign({ id, username, displayName, scope: userType }, privateKey, {
        algorithm,
        expiresIn: tokenExpiry
      });
      h.state(cookieName, token);
      return { token };
    } catch (e) {
      throw e;
    }
  };
};
