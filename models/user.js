const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min: 3,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        min:6,
        required:true
    },
    profilePic:{
        type:String,
        default:""
    },
    coverPic:{
        type:String,
        default:""
    },
    following:{
        type: Array,
        default:[]
    },
    follower:{
        type:Array,
        default:[]
    },
    name:{
        type:String,
        min:3,
        required: true
    },
    desc:{
        type:String
    },
    from:{
        type:String
    },
    relationship:{
        type:String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User',userSchema)