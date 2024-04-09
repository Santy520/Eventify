const router = require('express').Router();
const { Event } = require('../../models');

// localhost/api/events/...

// Post event details -
router.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create({
      title: req.body.eventTitle,
      description: req.body.eventDesc,
      location: req.body.eventLoca,
      date: req.body.eventDate,
      time: req.body.eventTime,
      // user_id: req.session.user_id, PLEASE REVISIT IN FUTURE
    });

    res.status(200).json(newEvent);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete event
router.delete('/:id', async (req, res) => {
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
