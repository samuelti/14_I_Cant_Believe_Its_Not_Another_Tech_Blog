const { User } = require('../models');

const userData = [
    {
        username: 'Serious User',
        password: 'S3r1ous'
    },
    {
        username: 'Cool User',
        password: 'C00ldud3'
    },
    {
        username: 'Silly User',
        password: 'S1llyStuff'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;