const router = require('express').Router();
const Comments= require("../../models/Comments")
const withAuth = require('../../utils/auth')
//create a coment

router.post('/', withAuth, async (req, res)=>{
    try{
        const newComment = await Comments.create({
            ...req.body,
            userId: req.session.userId
        })
        res.json(newComment);

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;