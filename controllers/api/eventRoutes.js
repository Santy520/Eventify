const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Event, Subscription } = require('../../models');

// localhost/api/events/...

// Create new event and subscribe to it
router.post('/', withAuth, async (req, res) => {
  try {
    const newEvent = await Event.create({
      title: req.body.eventTitle,
      description: req.body.eventDesc,
      location: req.body.eventLoca,
      date: req.body.eventDate,
      time: req.body.eventTime,
    });

    // Retrieve data from newly created event
    // Then use the event id to subscribe the user to the new event
    const eventData = await Event.findOne({
      where: {
        title: req.body.eventTitle,
        description: req.body.eventDesc,
        location: req.body.eventLoca,
        date: req.body.eventDate,
        time: req.body.eventTime
      }
    })
    const eventDataTrim = eventData.get({ plain:true })

    const newSub = await Subscription.create({
      userId: req.session.user_id,
      eventId: eventDataTrim.id
    });

    res.status(200).json({ newEvent, newSub });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete event
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventDelete = await Event.destroy({
      where: {
        id: req.params.id
      }
    })
  
    if (!eventDelete) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(eventDelete);
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;
