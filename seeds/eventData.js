const { Event } = require('../models');

const eventData = [
  {
    "title": "dummy1Title",
    "description": "dummy1Desc",
    "location": "dummy1Location",
    "date": "dummy1Date",
    "time": "dummy1Time"
  },
  {
    "title": "dummy2Title",
    "description": "dummy2Desc",
    "location": "dummy2Location",
    "date": "dummy2Date",
    "time": "dummy2Time"
  },
  {
    "title": "dummy3Title",
    "description": "dummy3Desc",
    "location": "dummy3Location",
    "date": "dummy3Date",
    "time": "dummy3Time"
  }
]

const seedEvent = () => Event.bulkCreate(eventData)

module.exports = seedEvent;