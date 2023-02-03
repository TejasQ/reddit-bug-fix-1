const Sequelize = require('sequelize');
const models = require('../models')
require('dotenv').config()

const sequelize = new Sequelize(process.env.TABLE_NAME, process.env.USER, process.env.PASS, {
  host: 'localhost',
  dialect: 'mysql',
});

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;