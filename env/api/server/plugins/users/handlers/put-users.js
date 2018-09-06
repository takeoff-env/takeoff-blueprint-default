const { hashPassword } = require('../utils');
const User = require('../../../../database/models/user');

module.exports = server => {
  return async (req, reply) => {
    if (req.payload.password) {
      req.payload.password = await hashPassword(req.payload.password);
    }
    try {
      const result = await User.updateOne({ id: req.params.id }, req.payload);
      return { success: true, result };
    } catch (e) {
      throw e;
    }
  };
};
