const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model{}

Post.init(
    {
       
        title: DataTypes.STRING,
        body: DataTypes.STRING
        // date: {
        //     type: DataTypes.DATE,
        //     //defaultValue: sequelize.NOW
        // }
    }, 
    {
        sequelize
    }

)

module.exports = Post;