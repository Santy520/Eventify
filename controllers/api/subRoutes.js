const router = require('express').Router();
const { Subscription } = require('../../models');

// localhost/api/subs/...

// Create a subscription to an event ( NEED TESTING )
router.post('/', async (req, res) => {
  // req.body = { eventId }
  try {
    const subData = await Subscription.create({
      userId: req.session.user_id,
      eventId: req.body.eventId
    });
    res.status(200).json(subData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a subscription of user to an event ( NEED TESTING )
router.delete('/:id', async (req, res) => {
  try {
    const subData = await Subscription.destroy({
      where: { id: req.params.id }
    });
    if (!subData) {
      res.status(404).json({ message: 'User subscription does not exist' });
      return;
    }
    res.status(200).json(subData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
