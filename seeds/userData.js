const { User } = require('../models');

const userData = [
  {
    name: "Glen_W",
    email: "glen.winters@notReal.com",
    password: "dummy1"
  },
  {
    name: "ILoveCookies",
    email: "CookiesYaaaay@notReal.com",
    password: "dummy2"
  },
  {
    name: "John C.",
    email: "UcantCme@notReal.com",
    password: "dummy3"
  }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;