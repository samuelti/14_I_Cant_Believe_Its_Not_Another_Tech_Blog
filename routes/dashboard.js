const router = require('express').Router();
const { User, Post, Comment } = require('../models/');
const withAuth = require('../utils/auth')

// find all posts using the id of the user that is signed in
router.get('/', withAuth, async (req, res)=>{
    try {
      const data = await Post.findAll({
        where: {
          userId: req.session.userid,
        },
      });

      const posts = data.map((postData) => postData.get({ plain: true }));

      res.render("all-posts-admin", {
        layout: "dashboard",
        posts,
      });
    } catch (err) {
      res.redirect("login");
    }
})

router.get('/edit/:id', withAuth, async (req, res)=> {
    try{

        const data = await Post.findByPk(req.params.id);
        if (data){
            const post = data.get({plain:true});
            res.render('edit-post', {
                layout:'dashboard',
                post
            })
        }else{
            res.status(404).end
        }

    }catch(err){
        res.redirect('login') 
    }
})


//ability to create and edit posts the user created. 


module.exports = router;