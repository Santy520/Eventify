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


    // // Loop through eventData and create events with random user_id
    // for (const event of eventData) {
    //   // Generate a random user_id from the users array
    //   const randomUserId = users[Math.floor(Math.random() * users.length)].id;

    //   // Create event with random user_id
    //   await Event.create({
    //     ...event,
    //     user_id: randomUserId,
    //   });
    // }