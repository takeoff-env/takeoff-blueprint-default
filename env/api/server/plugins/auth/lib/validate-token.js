const Boom = require('boom');
const moment = require('moment');

/**
 * Validator method for checking a valid web token, by default we check for a valid ID and that is has not expired
 * @param _request
 * @param decoded
 * @param cb
 * @returns {*}
 */
module.exports = async (_request, decoded) => {
  if (!decoded.id) {
    throw Boom.unauthorized();
  }

  if (moment().isAfter(decoded.exp * 1000)) {
    throw Boom.unauthorized();
  }

  return decoded;
};
