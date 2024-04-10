const { Event } = require('../models');

const eventData = [
  {
    title: "Web Development Networking Event",
    description: "Meet people in your industry! Sponspored by NotRealTech",
    location: "5859 Auer Crossroad, South Kristoffer, New Jersey 38874-9959 ",
    date: "2024-05-01",
    time: "09:00:01"
  },
  {
    title: "Wildcats Vs Trojans Championship Match ",
    description: "Come join us and support your local wildcats!",
    location: "548 Jone Garden, Camden, New Jersey 08102", 
    date: "2024-05-02",
    time: "12:00:02"
  },
  {
    title: "Stacey's Surprise Party 🎉🎉🎉",
    description: "Shhhh, it's a secret",
    location: "1585 Duke Lane, Branchburg, New Jersey, 08876",
    date: "2024-05-03",
    time: "18:00:03"
  }
]

const seedEvent = () => Event.bulkCreate(eventData)

module.exports = seedEvent;