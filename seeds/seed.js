const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedEvent = require('./eventData');
const seedSubscription = require('./subscriptionData');

// Define the seed function
const seedDatabase = async () => {

  await sequelize.sync({ force: true });

  await seedUser();

  await seedEvent();

  // currently not working
  // await seedSubscription(); 

  process.exit(0);
};

// Execute the seed function
seedDatabase();