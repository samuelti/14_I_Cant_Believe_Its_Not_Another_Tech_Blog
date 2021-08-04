const { Post } = require('../models');

const postData = [
    {
        title:'Very cool article',
        body: 'This is a cool article writen by a cool dude'
    },
    {
        title:'Very serious article',
        body: 'This is a very serious article.'
    },
    {
        title: 'Very silly article',
        body: 'This is a very silly article :DDDDDDD'
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;