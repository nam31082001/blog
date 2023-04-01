const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog=new Schema({
    title: { type: String },
    body: { Type: String },
    img: { type: String },
    countLike: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }

},
    { timestamps: true }
)
module.exports =mongoose.model('blogs',Blog)