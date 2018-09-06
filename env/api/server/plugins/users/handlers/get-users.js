module.exports = server => {
  return async function(req, reply) {
    const { limit, offset } = req.query;

    try {
      const users = await server.app.models.User.find().select('-password');
      return users;
    } catch (e) {
      throw e;
    }
  };
};
