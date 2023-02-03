const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Teams extends Model {}

Teams.init(
    {
        id:{
            autoIncrement:true,
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        team_name:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps:true,
        freezeTableName:true,
        underscored:true,
        paranoid:true,
        modelName: 'teams'
    }
)

module.exports = Teams

