const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId:{
        type: String,
        require:true,
    },
    description:{
        max: 2000,
        type: String
    },
    image:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    },
    likes:{
        type: Array,
        default: []
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Post',postSchema)