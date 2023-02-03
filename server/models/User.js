

const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class User extends Model {}

User.init(
    {
        id:{
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        user_name:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        }
    },
    {
        sequelize,
        modelName: 'user',
        freezeTableName:true,
        timestamps:true,
        paranoid:true,
        underscored:true,
        indexes:[
            {
                unique: true,
                fields:['user_name']
            }
        ]

    }
)

module.exports = User