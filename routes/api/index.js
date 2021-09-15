//create backend routes for the api

const router = require('express').Router();

const userRoute= require('./user-route.js');
const postRoute = require('./post-route');
const commentRoute = require("./comment-route")

router.use('/user', userRoute);
router.use('/post', postRoute);
router.use('/comment', commentRoute);

module.exports = router;