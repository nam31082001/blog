const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Comment = new Schema({
    id: { type: String },
    commentClient: { type: String },
    feedback: { type: Array },
    countLike: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
},
    {
        timestamps: true
    }
)
module.exports=mongoose.model('comments',Comment)