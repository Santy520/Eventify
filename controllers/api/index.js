const router = require('express').Router();
const eventRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');

// localhost/api/...

router.use('/events', eventRoutes);
router.use('/users', userRoutes)

module.exports = router;
