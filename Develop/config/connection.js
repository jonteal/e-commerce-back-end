// Require the dotenv dependency 
require('dotenv').config();

// Require the Sequelize dependency 
const Sequelize = require('sequelize');

// Sequelize to create process environment in order to help conceal private information
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Exporting Sequelize
module.exports = sequelize;
