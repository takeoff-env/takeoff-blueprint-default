const { hashPassword } = require('../utils');
const User = require('../../../../database/models/user');

module.exports = () => {
  return async function(req) {
    const { username, password, role, displayName } = req.payload;

    try {
      const hashedPassword = await hashPassword(password);
      const userObject = {
        role,
        username,
        password: hashedPassword,
        displayName: displayName,
      };

      const newUser = new User(userObject);
      const data = await newUser.save();

      return { success: true, data };
    } catch (e) {
      throw e;
    }
  };
};
