const router = require('express').Router();
// const { Event, User } = require('../models');

// localhost/

    // Get Request for homepage
router.get('/', (req, res) => {
  try {
    
    if (req.session.logged_in != true) {
      res.redirect('/login');
      return;
    }
    // GET all posted events
      // const eventDataPull = await Event.findall({
        // include
      // });

      // const event = eventDataPull.map((event) => event.get({ plain: true }));

    res.render('events');

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login')
});

module.exports = router;
