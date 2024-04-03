const sequelize = require('./');
const { Event, User } = require('./models');

// Import JSON data
const eventData = require('./data/eventData.json');
const userData = require('./data/userData.json');

// Define the seed function
const seedDatabase = async () => {
  try {
    // Sync the database 
    await sequelize.sync({ force: true });

    
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    // Loop through eventData and create events with random user_id
    for (const event of eventData) {
      // Generate a random user_id from the users array
      const randomUserId = users[Math.floor(Math.random() * users.length)].id;

      // Create event with random user_id
      await Event.create({
        ...event,
        user_id: randomUserId,
      });
    }

    console.log('Database seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Execute the seed function
seedDatabase();
