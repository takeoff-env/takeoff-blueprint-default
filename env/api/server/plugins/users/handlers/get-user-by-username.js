module.exports = server => async req => {
  const { username } = req.params;
  try {
    const user = await server.app.models.User.findOne({ username }).select(
      '-password',
    );
    return user;
  } catch (e) {
    throw e;
  }
};
