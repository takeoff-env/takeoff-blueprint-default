module.exports = server => async (req) => {
  const { limit, offset } = req.query;

  try {
    const users = await server.app.models.User.find()
      .select('-password')
      .skip(offset * limit)
      .limit(limit);
    return users;
  } catch (e) {
    throw e;
  }
};
