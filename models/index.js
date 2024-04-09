// Import required modules and models
const sequelize = require('../config/connection');
const User = require('./User');
const Event = require('./event');
const Subscription = require('./Subscription');

// Define the association between User and Event
User.hasMany(Subscription, {
    foreignKey: 'userId' 
});
Subscription.belongsTo(User, {
    foreignKey: 'userId' 
});

Event.hasMany(Subscription, {
    foreignKey: 'eventId' 
});
Subscription.belongsTo(Event, {
    foreignKey: 'eventId' 
});

module.exports = { User, Event, Subscription };
