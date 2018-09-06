const User = require('../../../../database/models/user');

module.exports = server => {
  return async function(req, reply) {
    const { limit, offset } = req.query;

    try {
      const users = await User.find().select('-password');
      return users;
    } catch (e) {
      throw e;
    }
  };
};
