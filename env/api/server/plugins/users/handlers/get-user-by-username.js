const Boom = require('boom');

module.exports = server => {
  return async function(req, reply) {
    const { username } = req.params;
    try {
      const user = await server.app.models.User.findOne({ username }).select('-password');
      return user;
    } catch (e) {
      throw e;
    }
  };
};
