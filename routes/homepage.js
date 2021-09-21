const router = require("express").Router();
const { User, Post, Comment } = require("../models/");

// get all posts
router.get("/", async (req, res) => {
  try {
    const data = await Post.findAll({
      include: [User],
    });
    
    const posts = data.map((postData) => postData.get({ plain: true }));
    console.log(posts);
    res.render("all-posts", {
      layout: "main",
      postsData: posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get a single post
router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  })
    .then((postData) => {
      const post = postData.get({ plain: true });
      res.render("single-post", {
        layout: "main",
        post: post,
        Session:req.session
      });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

router.get("/logout", (req,res) => {
  if (req.session.loggedIn) {
    req.session.destroy(()=>{
    console.log('You are logged out');
  })
  }
  res.redirect("/");
})

module.exports = router;
