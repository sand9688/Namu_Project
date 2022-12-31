const mongoose = require('mongoose');
const { Schema } = mongoose;

const BorderUser = new Schema({
    id : String,
    pw : String,
    email : String,

},{
    timestamps: true
})

module.exports = mongoose.model('BorderUser', BorderUser)