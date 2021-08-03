const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/index');

class Post extends Model{}

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    }, 
    {
        sequelize
    }

)

module.exports = Post;