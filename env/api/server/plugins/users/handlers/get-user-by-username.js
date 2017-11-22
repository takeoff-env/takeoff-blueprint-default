const Boom = require('boom');

module.exports = server => {
  return async function(req, reply) {
    const { username } = req.params;
    try {
      const user = await server.app.db.User.findOne({
        where: { username },
        attributes: { exclude: ['password'] }
      });

      return user;
    } catch (e) {
      throw e;
    }
  };
};
