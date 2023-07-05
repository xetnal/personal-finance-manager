// server.js
const { validateRegistration } = require('./validators');
const { validationResult } = require('express-validator');
const authRoutes = require('./authRoutes');
const expensesRoutes = require('./routes/expenses');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/register', validateRegistration, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
}
);

app.use('/auth', authRoutes);

// Use routes
app.use('/expenses', expensesRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});