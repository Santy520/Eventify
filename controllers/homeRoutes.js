const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Event, Subscription } = require('../models');

// localhost/...

// Get subscribed events (homepage)
router.get('/', withAuth, async (req, res) => {
  try {
    // Will be an array
    const subsData = await Subscription.findAll({ 
      where: {
        userId: req.session.user_id
      },
      include: {
          model: Event,
          attributes: ['id', 'title', 'description', 'location', 'date', 'time']
      }
    });
    const subs = subsData.map((x) => x.get({ plain: true }));

    res.render('homepage', { 
      logged_in: req.session.logged_in,
      subs
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
    res.render('events', { 
      logged_in: req.session.logged_in,
      events
     });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one event
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

// Form for posting event
router.get('/newEvent', withAuth, async (req, res) => {
  try {
    res.render('event-post', { 
      logged_in: req.session.logged_in
     });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Profile page (INCOMPLETE)
router.get('/profile', withAuth, async (req, res) => {
  try {
    res.render('profile', { 
      logged_in: req.session.logged_in
     });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) { // If logged in, redirects user to homepage
    res.redirect('/');    
  }
  res.render('login')
});

module.exports = router;
