const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Event, Subscription, User } = require('../models');

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

    // Gathers all other users subscribed to an event and displays it on the page
    const attendantsData = await Subscription.findAll({
      where: {
        eventId: event.id
      },
      include: {
        model: User,
        attributes: ['id','name']
      }
    });
    let attendants = attendantsData.map((x) => x.get({ plain: true }));

    for (let index = 0; index < attendants.length; index++) {
      const element = attendants[index];
      if (element.userId === req.session.user_id) {
        attendants.splice(index, 1);
      }
    }

    // If no other users, change variable to null to allow easier handling in handlebars
    if (attendants.length === 0) {
      attendants = null;
    }

    res.render('event-single', { 
      logged_in: req.session.logged_in,
      event,
      attendants
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

// Profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
    const profileData = await User.findByPk(req.session.user_id);
    const profile = profileData.get({ plain: true })
  
    // Checks if user owns the profile page
    const compareId = (user) => {
      return user.id == req.session.user_id
    }
    const checkId = compareId(profile)

    res.render('profile', { 
      logged_in: req.session.logged_in,
      profile,
      checkId
     });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Other user's profile page
router.get('/profile/:id', withAuth, async (req, res) => {
  try {
    const profileData = await User.findByPk(req.params.id);
    const profile = profileData.get({ plain: true })
    
    // Checks if user owns the profile page
    const compareId = (user) => {
      return user.id == req.session.user_id
    }
    const checkId = compareId(profile)

    res.render('profile', { 
      logged_in: req.session.logged_in,
      profile,
      checkId
     });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login page
router.get('/login', (req, res) => {
  // If logged in, redirects user to homepage
  if (req.session.logged_in) { 
    res.redirect('/');    
  }
  res.render('login')
});

module.exports = router;
