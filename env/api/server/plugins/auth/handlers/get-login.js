const Boom = require('boom');

module.exports = (server, options) => {
  return function(req, h) {
    const { userType } = req.params;

    if (!options.userTypes.includes(userType)) {
      throw Boom.badData(`Unknown user type ${userType}`);
    }

    return h.view('plugins/auth/templates/login.html', {
      userType,
      apiPrefix: server.settings.app.apiPrefix
    });
  };
};
