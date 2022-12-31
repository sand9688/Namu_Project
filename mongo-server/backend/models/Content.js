const mongoose = require('mongoose');
const { Schema } = mongoose;

const Content = new Schema({
    num : Number,
    title : String,
    twitter : String,
    content : String,
    visiter : Number,
    img : Object

},{
    timestamps: true
})


module.exports = mongoose.model('Content', Content)