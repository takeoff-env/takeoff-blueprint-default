import { genSalt, hash, compare } from 'bcrypt';

/**
 * Method to return a password hash
 * @param password
 * @returns {Promise.<T>}
 */
export const hashPassword = (password: string): Promise<string> =>
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

export const checkPassword = (
  password: string,
  hash: string,
): Promise<boolean> =>
  new Promise((resolve, reject) =>
    compare(
      password,
      hash,
      (error, isValid) => (error ? reject(error) : resolve(isValid)),
    ),
  );
