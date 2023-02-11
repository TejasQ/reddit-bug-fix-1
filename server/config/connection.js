const Sequelize = require('sequelize');
const models = require('../models')
require('dotenv').config()

const sequelize = new Sequelize(process.env.TABLE_NAME, process.env.USER, process.env.PASS, {
  host: 'postgres://team_maker_user:sWz4zGVcduCdFHERiOo8SVmErRx1aBQ3@dpg-cfha6vta499dgj0n1fsg-a.ohio-postgres.render.com/team_maker',
  dialect: 'postgres',
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
