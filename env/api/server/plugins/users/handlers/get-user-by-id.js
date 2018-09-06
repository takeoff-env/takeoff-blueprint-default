const Boom = require('boom');
const User = require('../../../../database/models/user');

module.exports = server => {
  return async function(req, reply) {
    const { id } = req.params;
    try {
      const user = await User.findOne({ id }).select('-password');
      return user;
    } catch (e) {
      throw e;
    }
  };
};
