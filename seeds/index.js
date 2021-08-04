const seedUsers = require('./user_seed');
const seedPosts = require('./post_seed');
//const seedComment = require('./comment_seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
  
    // await seedComment();
    // console.log('\n----- COMMENTS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();