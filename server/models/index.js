const Teams = require('./Teams')
const User = require('./User')
const sequelize = require('sequelize')

User.hasMany(Teams,{foreignKey:'id'})

Teams.belongsTo(User,{foreignKey:'id'})

module.exports = {
    User,
    Teams,
    sequelize
}