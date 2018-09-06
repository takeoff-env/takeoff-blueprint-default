const Boom = require('boom');

module.exports = server => {
  return async function(req, reply) {
    const { id } = req.params;
    try {
      const user = await server.app.models.User.findOne({ id }).select('-password');
      return user;
    } catch (e) {
      throw e;
    }
  };
};
