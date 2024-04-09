const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedEvent = require('./eventData');
const seedSubscription = require('./subscriptionData');

const seedDatabase = async () => {

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USER DATA SEEDED -----\n');

  await seedEvent();
  console.log('\n----- EVENT DATA SEEDED -----\n');

  await seedSubscription(); 
  console.log('\n----- SUBSCRIPTION DATA SEEDED -----\n');

  process.exit(0);
};

// Execute the seed function
seedDatabase();