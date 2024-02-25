const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    phoneNo:String,
    password:String,
    isDelete:Boolean
})

const users = mongoose.model('users',UserSchema);

module.exports = users
