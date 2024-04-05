const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedEvent = require('./eventData')

// Define the seed function
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedEvent();

  process.exit(0);
};

// Execute the seed function
seedDatabase();