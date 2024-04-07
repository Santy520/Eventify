const router = require('express').Router();
const { Event } = require('../../models');

// localhost/api/events/...

// Post event details -
router.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create({
            title: req.body.eventName,
            description: req.body.eventDesc,
            location: req.body.eventLoca,
            date: req.body.eventDate,
            time: req.body.eventTime,

            user_id: req.session.user_id,
        });

        res.status(200).json(newEvent);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', (req, res) => {
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
  
      res.render('Events');
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
