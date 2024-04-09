const { Subscription } = require('../models');

const subscriptionData = [
  {
    userID: 1,
    eventID: 1
  },
  {
    userID: 2,
    eventID: 2
  },
  {
    userID: 3,
    eventID: 3
  }
]

const seedSubscription = () => Subscription.bulkCreate(subscriptionData)

module.exports = seedSubscription;