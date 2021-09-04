const router = require('express').Router();
const Post = require("../models/post");
const User = require('../models/user');
const multer = require('../multer');
const Image = require('../models/image');
const fs = require("fs");
const path = require("path");

// create post
router.post("/", multer.single('myPost') ,async (req,res)=>{
    try{
        let newImage = null;
        if(req.file){
            const img = {
                data: fs.readFileSync(path.join(__dirname ,"..","/uploads/",  req.file.filename)),
                contentType: "image/png"
            }
    
           newImage = new Image({
                image: img
            })

            await newImage.save();
    
        }
        const newPost = await new Post({
            userId: JSON.parse(req.body.userId),
            description: JSON.parse(req.body.description),
            image: newImage?newImage:null
        });

        await newPost.save();
        res.status(200).json(newPost);
    }catch(err){
        console.log(err)
        res.status(500).json(err);
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
        const post = await Post.findById(req.params.id);
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
        const post = await Post.find({userId: req.params.id});
        res.status(200).json(post);
    }catch(err){
        res.json(err).status(500);
    }
})


// timeline
router.get("/timeline/all/:id", async (req,res)=>{

    try{
        const currUser = await User.findById(req.params.id);
        const userPost = await Post.find({userId: currUser._id});
        const friendPosts = await Promise.all(currUser.following.map((friendId)=>{
            return Post.find({userId:friendId})
        }))

        // console.log(userPost)
        res.json(userPost.concat(...friendPosts))
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

// get image
router.get("/postImage/:id",async (req,res)=>{
    try{
        const image = await Image.findById(req.params.id);
        res.status(200).json({content:image._doc.image.contentType,image:image.image.data.toString('base64')})
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;