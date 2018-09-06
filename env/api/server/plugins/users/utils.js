const {
  genSalt,
  hash,
  compare
} = require('bcrypt');

/**
 * Method to return a password hash
 * @param password
 * @returns {Promise.<T>}
 */
const hashPassword = password =>
  new Promise((resolve, reject) =>
    genSalt(10, (error, salt) => {
      if (error) return reject(error);
      return hash(
        password,
        salt,
        (error, hashed) => (error ? reject(error) : resolve(hashed)),
      );
    }),
  );

const checkPassword = (password, hash) =>
  new Promise((resolve, reject) =>
    compare(
      password,
      hash,
      (error, isValid) => (error ? reject(error) : resolve(isValid)),
    ),
  );

module.exports = {
  hashPassword,
  checkPassword,
};
