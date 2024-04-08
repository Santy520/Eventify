const router = require('express').Router();
const withAuth = require('../utils/auth')
const { Event } = require('../models');

// localhost/...

// Get Request for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    // Will be an array
    const eventsData = await Event.findAll();
    const events = eventsData.map((x) => x.get({ plain: true }));
    // events = { id, title, description, location, date, time }
    res.render('homepage', { 
      logged_in: req.session.logged_in,
      events
     });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all events
router.get('/events', withAuth, async (req, res) => {
  try {
    // Will be an array
    const eventsData = await Event.findAll();
    const events = eventsData.map((x) => x.get({ plain: true }));
    // events = { id, title, description, location, date, time }
    res.render('homepage', { 
      logged_in: req.session.logged_in,
      events
     });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one events
router.get('/events/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);
    const event = eventData.get({ plain: true });
    // event = { id, title, description, location, date, time }
    res.render('event-single', { 
      logged_in: req.session.logged_in,
      event
     });
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
