const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Comment extends Model { }
Comment.init(
    {

        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
);
module.exports = Comment;