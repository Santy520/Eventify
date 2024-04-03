const router = require('express').Router();
// const { Event, User } = require('../models');

    // Get Request for homepage
router.get('/', async (req, res) => {
  try {
    // GET all posted events
      const eventDataPull = await Event.findall({
        // include
      });
      const eventData = eventDataPull.map((event) => event.get({ plain: true }));

    res.render('homepage', {eventData});

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
