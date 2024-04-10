const { Subscription } = require('../models');

const subscriptionData = [
  {
    userId: 1,
    eventId: 1
  },
  {
    userId: 2,
    eventId: 2
  },
  {
    userId: 3,
    eventId: 3
  },
  {
    userId: 1,
    eventId: 3
  },
  {
    userId: 1,
    eventId: 2
  }
]

const seedSubscription = () => Subscription.bulkCreate(subscriptionData)

module.exports = seedSubscription;
