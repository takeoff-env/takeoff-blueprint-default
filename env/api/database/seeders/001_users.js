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

class UsersSeeder extends Seeder {
  async shouldRun() {
    return User.count()
      .exec()
      .then(count => count === 0);
  }

  async run() {
    return User.create(adminUser);
  }
}

module.export = UsersSeeder;
