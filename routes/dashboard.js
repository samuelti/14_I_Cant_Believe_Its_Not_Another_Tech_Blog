const router = require('express').Router();
const { User, Post, Comment } = require('../models/');
const withAuth = require('../utils/auth')

// find all posts using the id of the user that is signed in
router.get('/', withAuth, async (req, res)=>{
    try {
      console.log(req.session);
      const data = await Post.findAll({
        where: {
          userId: req.session.userId,
        },
      });
      console.log(data);
      const posts = data.map((postsData) => postsData.get({ plain: true }));

      res.render("all-posts-admin", {
        layout: "dashboard",
        postsData: posts,
      });
    } catch (err) {
      console.log(err);
      res.redirect("/login");
    }
})

router.get('/edit/:id', withAuth, async (req, res)=> {
    try{

        const data = await Post.findByPk(req.params.id);
        if (data){
            const post = data.get({plain:true});
            res.render('edit-post', {
                layout:'dashboard',
                postsData: post
            })
        }else{
            res.status(404).end
        }

    }catch(err){
        res.redirect('/login') 
    }
});

router.get('/newPost', withAuth, async (req, res) => {
  
  res.render('new-post', {
    layout:'dashboard',
  });
  
});


//ability to create and edit posts the user created. 


module.exports = router;