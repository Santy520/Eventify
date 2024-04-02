const router = require('express').Router();
// Required: Import Event model

// Post event details
router.post('/', async (req, res) => {
    try {
        console.log("LOGIC HERE");

        res.status(200).json();
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
