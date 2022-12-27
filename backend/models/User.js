const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,

    },
    address: {
        type: String,

    },
    password: {
        type: String,


    },
    role: {
        type: String,
        default: "Tenant"
    },
    contact:{
        type:Number,
    },
    profilePicture: { type: String },
   totalRooms:{
       type:Number,
       default:0
    },
    occupiedRooms:{
        type:Number,
        default:0,
    },
    token:{
        type:String
    }
    

})

const User = mongoose.model('User', userSchema)

module.exports = User;