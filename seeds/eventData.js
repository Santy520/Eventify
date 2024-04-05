const { Event } = require('../models');

const eventData = [
  {
    title: "dummy1Title",
    description: "dummy1Desc",
    location: "dummy1Location",
    date: "2024-05-01",
    time: "00:00:00"
  },
  {
    title: "dummy2Title",
    description: "dummy2Desc",
    location: "dummy2Location",
    date: "2024-05-02",
    time: "00:00:00"
  },
  {
    title: "dummy3Title",
    description: "dummy3Desc",
    location: "dummy3Location",
    date: "2024-05-03",
    time: "00:00:00"
  }
]

const seedEvent = () => Event.bulkCreate(eventData)

module.exports = seedEvent;