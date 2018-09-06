const { hashPassword } = require('../utils');

module.exports = server => {
  return async function(req) {
    const { username, password, role, displayName } = req.payload;

    try {
      const hashedPassword = await hashPassword(password);
      const userObject = {
        role,
        username,
        password: hashedPassword,
        displayName,
      };

      const newUser = new server.app.models.User(userObject);
      const data = await newUser.save();

      return { success: true, data };
    } catch (e) {
      throw e;
    }
  };
};
