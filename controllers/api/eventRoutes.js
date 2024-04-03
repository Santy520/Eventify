const router = require('express').Router();
const { Event } = require('../../models');

// Localhost:3001/api/events/...

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

module.exports = router;
