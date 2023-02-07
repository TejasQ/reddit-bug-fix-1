

const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

const SALT_ROUNDS = 11

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
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks:{
            beforeCreate: (user) => {
                return bcrypt.hash(user.password, SALT_ROUNDS)
                .then(hash => {
                    user.password = hash
                }).catch (err => {
                    throw new Error(err)
                })
            }
        },
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

User.prototype.comparePassword = function(password){
    return bcrypt.compare(password, this.password)
    }

module.exports = User