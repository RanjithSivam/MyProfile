const router = require('express').Router();
const Post = require("../models/post");
const User = require('../models/user');
// create post

router.post("/",async (req,res)=>{
    try{
        const newPost = await new Post(req.body);
        await newPost.save();
        res.status(200).json(newPost);
    }catch(err){
        res.json(err).status(500);
    }

})

// update

router.put("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Updated successfully")
        }else{
            res.status(403).json("You can't update others post");
        }
    }catch(err){
        res.json(err).status(err);
    }
})

// delete

router.delete("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne({$set:req.body});
            res.status(200).json("Deleted successfully")
        }else{
            res.status(403).json("You can't delete others post");
        }
    }catch(err){
        res.json(err).status(err);
    }
})

// like 

router.put("/:id/like",async (req,res)=>{
    try{
        const post = Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("The post has been liked.")
        }else{
            await post.updateOne({$pull:{likes: req.body.userId}})
            res.status(200).json("The post has been disliked.")
        }
    }catch(err){
        res.json(err).status(err);
    }
})

// get

router.get("/:id",async (req,res)=>{
    try{
        const post = Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.json(err).status(500);
    }
})


// timeline

router.post("/timeline/all", async (req,res)=>{

    try{
        const currUser = await User.findById(req.body.userId);
        const userPost = await Post.find({userId: currUser._id});
        const friendPosts = await Promise.all(currUser.following.map((friendId)=>{

            return Post.find({userId:friendId})
        }))

        console.log(friendPosts)
        res.json(userPost.concat(...friendPosts))
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})
module.exports = router;