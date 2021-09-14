const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// get all posts 
router.get('/', (req, res) => {
    Post.findAll({
        include: [User, Post]
    }).then((data) => {
        res.json(data)
    }).catch(err => res.status(500).json(err));
});

//get a single post
router.get('/post/:id', (req,res) => {
    Post.findByPk(req.params.id, {
        include: [
            User,
            {
                model: Comment,
                include: [User]
            }
        ]
    }).then((postData)=>{
        const post = postData.get({plain:true})
        res.render("singlePost", {post})
}).catch(err => res.status(500).json(err))
});

router.get("/login", (req, res)=>{
    if (req.session.loggedIn){
        res.redirect("/")
        return
    }
    res.render("login")
})

router.get("/signup", (req, res)=>{
    if (req.session.loggedIn){
        res.redirect("/")
        return
    }
    res.render("signup")
})

module.exports = router;