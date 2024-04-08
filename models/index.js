// Import required modules and models
const sequelize = require('../config/database');
const User = require('./User');
const Event = require('./event');

// Define the association between User and Event
User.hasMany(Event, {
    foreignKey: 'user_id' 
});
Event.belongsTo(User, {
    foreignKey: 'user_id' 
});

module.exports = { User, Event }