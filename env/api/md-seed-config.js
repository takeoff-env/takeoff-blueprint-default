const mongooseLib = require('mongoose');

mongooseLib.Promise = global.Promise || Promise;

const UsersSeeder = require('./database/seeders/users.seeder');

module.exports = {

  // Export the mongoose lib
  mongoose: mongooseLib,

  // Export the mongodb url
  mongoURL: process.env.MONGO_URL || 'mongodb://db',

  /*
    Seeders List
    ------
    order is important
  */
  seedersList: {
    Users: UsersSeeder
  }
};
