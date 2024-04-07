const router = require ('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');
const { signUpMail } = require('../../utils/nodemailer')

// localhost/api/users/...

// login user set handlebar login flags to on
// TODO: Implement AUTH

router.post('/login', async (req, res) => {
  try {

    const userData = await User.findOne({ where: { name: req.body.username } });
    if (!userData) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    // Compare passwords
    if (req.body.password !== userData.password) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json({ user_id: userData.id, message: 'Login successful.' });
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout user

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Create new user 
// TODO: Implement AUTH

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      signUpMail(userData);
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;