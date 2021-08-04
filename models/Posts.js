const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

Post.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        title: DataTypes.STRING,
        body: DataTypes.STRING
        // date: {
        //     type: DataTypes.DATE,
        //     //defaultValue: sequelize.NOW
        // }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }

)

module.exports = Post;