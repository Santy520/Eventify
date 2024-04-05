const { User } = require('../models');

const userData = [
  {
    name: "dummy1",
    email: "dummy1@dummy.com",
    password: "dummy1"
  },
  {
    name: "dummy2",
    email: "dummy2@dummy.com",
    password: "dummy2"
  },
  {
    name: "dummy3",
    email: "dummy3@dummy.com",
    password: "dummy3"
  }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;