const { hashPassword } = require('../utils');

module.exports = server => {
  return async (req, reply) => {
    if (req.payload.password) {
      req.payload.password = await hashPassword(req.payload.password);
    }
    try {
      const result = await server.app.models.User.updateOne(
        { id: req.params.id },
        req.payload,
      );
      return { success: true, result };
    } catch (e) {
      throw e;
    }
  };
};
