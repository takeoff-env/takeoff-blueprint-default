import Boom from 'boom';
import moment from 'moment';
import { Request } from 'hapi';

/**
 * Validator method for checking a valid web token, by default we check for a valid ID and that is has not expired
 * @param _request
 * @param decoded
 * @param cb
 * @returns {*}
 */
export = async (_request: Request, decoded: any) => {
  if (!decoded.id) {
    throw Boom.unauthorized();
  }

  if (moment().isAfter(decoded.exp * 1000)) {
    throw Boom.unauthorized();
  }

  return decoded;
};
