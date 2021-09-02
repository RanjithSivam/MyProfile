const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// update
router.put('/:id',async (req,res)=>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);

            }catch(err){
                res.send(err).status(500);
            }
        }

        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body
            })
            res.send("Updated Successfully").status(200);
        }catch(err){
            res.status(500).send(err);
        }
    }else{
        res.send("Only your account can be updated").status(403);
    }
})

// delete
router.delete('/:id',async (req,res)=>{
    if(req.body.userId === req.params.id){

        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.send("Deleted Successfully").status(200);
        }catch(err){
            res.status(500).send(err);
        }
    }else{
        res.send("Only your account can be deleted").status(403);
    }
})

// get
router.get('/:id',async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,...other} = user._doc;
        res.status(200).json(other);
    }catch(err){
        res.send(err).status(500)
    }
})

// follow
router.put('/:id/follow',async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currUser = await User.findById(req.body.userId);

            if(!user.follower.includes(req.body.userId)){
                // await User.findByIdAndUpdate(req.params.id,{
                //     $push:{followers:req.body.userId}
                // })

                await user.updateOne({$push:{follower:req.body.userId}})
                await currUser.updateOne({$push:{following:req.params.id}})
                // await User.findByIdAndUpdate(req.body.userId,{
                //     $push:{following:req.params.id}
                // })

                res.status(200).send("Done")
            }else{
                res.send("You don't follow this user").status(403)
            }
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }else{
        res.send("Cant follow yourself").status(403);
    }
})
// unfollow
router.put('/:id/unfollow',async (req,res)=>{
    if(req.body.userId === req.params.id){

        try{
            const user = await User.findById(req.params.id)
            if(!user.followers.includes(req.body.userId)){
                await User.findByIdAndUpdate(req.params.id,{
                    $pull:{followers:req.body.userId}
                })
                await User.findByIdAndUpdate(req.body.userId,{
                    $pull:{following:req.params.id}
                })

                res.status(200).send("Done")
            }else{
                res.send("You don't follow this user").status(403)
            }
        }catch(err){
            res.send(500).json(err)
        }
    }else{
        res.send("Cant follow yourself").status(403);
    }
})

module.exports = router;