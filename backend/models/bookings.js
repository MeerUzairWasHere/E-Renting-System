const mongoose = require('mongoose')
const { Schema } = require('mongoose')


const bookingSchema = new Schema({

    landLordId: {
        type: mongoose.Schema.Types.ObjectId, ref:'User',
    },
    tenantId: {
        type:mongoose.Schema.Types.ObjectId, ref:'User'
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,ref: 'rentDetails',
    },
    bookedAt: {
        type: Date,
        default: Date.now
    },
    checkOutDate: {
        type: Date,
        default:Date.now
    },
    landLordChecked: {
        type: Boolean,
        default: false
    },
    approvalStatus:{
        type:String,
        default: 'notApplied'
    },
    notification:{
        type: String,
        maxlength:100
    },
    


})

module.exports = mongoose.model('bookingDetails', bookingSchema)