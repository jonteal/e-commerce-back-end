// Initializing a Router with Express
const router = require('express').Router();

// Initializing API routes
const apiRoutes = require('./api');

// Using the API routes
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Exporting the Router
module.exports = router;