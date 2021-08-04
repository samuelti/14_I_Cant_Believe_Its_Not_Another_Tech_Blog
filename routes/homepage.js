const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// get all posts 
router.get('/', (req, res) => {
    Post.findAll({
        include: [User]
    }).then((data) => {console.log('This is the Data',data);
        res.render('homepage', {layout:'main'})
    }).catch(err => res.status(500).json(err));
});

//get a single post
router.get('/:id', (req,res) => {
    Post.findOne({
        where:{
            id: req.params.id
        },
        include: [Post,User,Comment]
    }).then((data) => res.json(data))
    .catch(err => res.status(500).json(err));
});

module.exports = router;