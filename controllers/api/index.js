const router = require('express').Router();
const eventRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');
const subRoutes = require('./subRoutes')

// localhost/api/...

router.use('/events', eventRoutes);
router.use('/users', userRoutes)
router.use('/subs', subRoutes)

module.exports = router;

