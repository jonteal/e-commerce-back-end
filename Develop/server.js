// Imports the Express dependency
const express = require('express');

// Imports the sequelize connection
const routes = require('./routes');

// Variable to call the express function
const app = express();

// Establishes the port the application will use
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
