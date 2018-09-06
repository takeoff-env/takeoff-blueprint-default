const mongooseLib = require('mongoose');

mongooseLib.Promise = global.Promise;

// Export the mongoose lib
exports.mongoose = mongooseLib;

// Export the mongodb url
exports.mongoURL = process.env.MONGO_URL || 'mongodb://db';

const UsersSeeder = require('./database/seeders/001_users');

/*
  Seeders List
  ------
  order is important
*/
exports.seedersList = {
  Users: UsersSeeder,
};
