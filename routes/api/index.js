//create backend routes for the api

const router = require('express').Router();

const userRoute= require('./user-route.js')

router.use('/user', userRoute);

module.exports = router;