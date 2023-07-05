const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Login route with validation
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Authenticate the user
const { email, password } = req.body;

// TODO: Retrieve the user from the database based on the email

// TODO: Compare the provided password with the hashed password in the database
const passwordMatch = async () => await bcrypt.compare(password, user.password);

if (!passwordMatch) {
  return res.status(401).json({ error: 'Invalid credentials' });
}

// Generate a JWT token
const token = jwt.sign({ userId: user._id }, 'your_secret_key');

// Return the token in the response
res.json({ token });

  }
);

// Protected route
router.get('/profile', authenticate, (req, res) => {
  // Access the authenticated user's information from req.user
  // ...
});

module.exports = router;

module.exports = router;
