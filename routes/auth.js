const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user')

router.post('/register',async (req,res)=>{

    try{
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password,salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: password,
            name: req.body.name
        })
        
        await newUser.save();
        res.status(200).send("Successfull!")
    }catch(err){
        res.status(500).send(err)
    }
})

router.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).send("No valid email.");

        const validPassworrd = await bcrypt.compare(req.body.password,user.password);
        !validPassworrd && res.status(400).send("Incorrect password")

        res.send(user).status(200);
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router;