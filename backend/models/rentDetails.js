const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// var AutoIncrement = require('mongoose-sequence')(mongoose);

const rentSchema = new Schema({
    image: [{type:String}],
    legalDocuments: [{type:String}],
    
    roomTypes: {
        type: String,
    },
    landLordId: {
        type:  mongoose.Schema.Types.ObjectId, ref:'User',
    },
    description: {
        type: String,

    },
   
   
    // booked: {
    //         type: Boolean,
    //         default: false
    // } ,
    roomNo:{
        type:Number,
        default:0,
    },
    pincode: String,
    district: String,
    city: String,
    street: String,
    landmark: String,
    state: String,
    // totalRooms:{
    //     type:Number,
    //     default:0
    // }
})



module.exports = mongoose.model('rentDetails', rentSchema)