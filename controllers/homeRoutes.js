const router = require('express').Router();
const withAuth = require('../utils/auth')
// const { Event, User } = require('../models');

// localhost/...

    // Get Request for homepage
router.get('/', withAuth, async (req, res) => {
  try {

    // if (req.session.logged_in != true) {
    //   res.redirect('/login');
    //   return;
    // }
    // GET all posted events
      // const eventDataPull = await Event.findall({
        // include
      // });

      // const event = eventDataPull.map((event) => event.get({ plain: true }));

    res.render('homepage', { logged_in: req.session.logged_in });


  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) { // If logged in, redirects user to homepage
    res.redirect('/');    
  }
  res.render('login')
});

module.exports = router;
