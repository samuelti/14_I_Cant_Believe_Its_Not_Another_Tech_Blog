const router = require('express').Router();
const {User} = require('../../models')


//create userRoute
router.post("/", (req, res)=>{
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(userData=>{
        req.session.save(()=>{
            req.session.userId = userData.id;
            req.session.username= userData.username;
            req.session.loggedIn = true;

            res.json(userData)
        })
    }).catch(err=>{
        console.log(err) 
           res.status(500).json(err)
    })
})

//check user login and allow them access to the site
router.post("/login", (req, res)=>{
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(userData=>{
        if(!userData){
            res.status(400).json({message:"no user found"})
            return
        }

        if (!userData.checkPassword(req.body.password)){
            res.status(400).json({message:"wrong Password"})
            return
        }

        req.session.save(()=>{
            req.session.userId = userData.id;
            req.session.username= userData.username;
            req.session.loggedIn = true;

            res.json({user: userData, message: "logged in"})
        })


    })
})
//log out function

router.post('/logout', (req, res)=>{
    if(req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(204).json({message:"you are lgogged out"}).end();
        })
    }else{
        res.status(400).end()
    }
})

module.exports = router;