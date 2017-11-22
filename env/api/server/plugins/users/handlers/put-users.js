const { hashPassword } = require('../utils');

module.exports = server => {
  return async (req, reply) => {
    const fields = Object.keys(req.payload);
    if (req.payload.password) {
      req.payload.password = await hashPassword(req.payload.password);
    }
    try {
      await server.app.db.User.update(req.payload, {
        where: {
          id: req.params.id
        },
        fields: fields
      });
      return { success: true };
    } catch (e) {
      throw e;
    }
  };
};
