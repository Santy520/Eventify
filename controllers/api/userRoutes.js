const router = require ('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// login user set handlebar login flags to on

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find user by email
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Set session variables
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.status(200).json({ user_id: user.id });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Create new user

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const userData = await User.create({ username, email, password: hashedPassword });
    // Set session variables
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;