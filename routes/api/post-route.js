const router =  require('express').Router();
//const { INITIALLY_DEFERRED } = require('sequelize/types/lib/deferrable');
const {Post} = require('../../models/');
const withAuth = require('../../utils/auth');

//create a post
router.post('/', withAuth, async (req, res)=>{
    const postBody = req.body;

    try{

        const newPost = await Post.create({...postBody, userId: req.session.userId});
        res.json(newPost);

    }catch (err){
        res.status(500).json(err)
    }
})

//update a post
router.put('/:id', withAuth, async (req,res)=>{
    try{
        const [rows] = await Post.update(req.body, {
            where:{
                id: req.params.id
            }
        })

        if(rows >0){
            res.status(200).end()
        }else{
            res.status(404).end()
        }

    }catch(err){
        res.status(500).json(err)
    }
})

//delete a post

router.delete('/:id', withAuth, async (req,res)=>{
    try{
        const removedPost = await Post.destroy({
            where: {id:req.params.id}
        });
        if(removedPost==1){
            res.status(200).end()
        }else{
            res.status(404).end()
        }
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;