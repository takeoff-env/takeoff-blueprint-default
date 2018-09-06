const { Seeder } = require('mongoose-data-seed');

const User = require('../models/user');

const adminUser = [
  {
    username: 'admin',
    password: '$2a$10$C3eXG5ruD3M.WEspUYkE4OcxKmG0qq4MoyShyNkLb3BOVTXSFkDt2',
    display_name: 'Super Admin',
    role: 'admin',
  },
];

const UsersSeeder = Seeder.extend({
  shouldRun: function() {
    return User.count()
      .exec()
      .then(count => count === 0);
  },
  run: function() {
    return User.create(adminUser);
  },
});

module.exports = UsersSeeder;
