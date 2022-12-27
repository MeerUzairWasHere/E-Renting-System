const rentDetailsModel = require('../../../models/rentDetails')
const bookings = require('../../../models/bookings')
var ObjectID = require('mongodb').ObjectID
const UserModel = require('../../../models/User')
// const User = require('../../../models/User')




exports.notifiLandlord = async(req, res) => {
    const query = { landLordId: req.params.id, landLordChecked: false }

    bookings.find(query, (err, doc) => {
        if (err) {
            return res.send(err)
        } else {
            return res.status(200).json(doc)
        }
    })
}

exports.addRentDetails = async(req, res) => {
    const addRoomDetails = new rentDetailsModel(req.body)
    const {landLordId} = req.body 
    // console.log(req.body)
      UserModel.findByIdAndUpdate(landLordId,{$inc:{totalRooms:1}},{new:true},(err,doc)=>{
          if(err){
              res.json(err)
          }else{
              addRoomDetails.save((err,doc)=>{
                  if(err){
                      res.json(err)
                  }else{
                      res.status(200).json({info:'Details saved Successfully'})
                  }
              })
          }
      })
    


}

exports.deleteRentDetails = async(req, res) => {
     const {landLordId}=await rentDetailsModel.findById(req.params.id)
    await rentDetailsModel.findByIdAndDelete(req.params.id)
   
    await UserModel.findByIdAndUpdate(landLordId,{$inc:{totalRooms:-1,occupiedRooms:-1}})
    await bookings.findByIdAndDelete(req.params.id)
    res.status(200).json({ messagae: "Room details deleted Successfully" })
}

exports.getallRentDetails = (req, res) => {
    const query = { landLordId: req.params.id }
    rentDetailsModel.find(query, (err, doc) => {
        if (err) {
            res.send(err)
        } else {

            res.status(200).json(doc)
        }
    })

}

exports.editRentDetails = async(req, res) => {
    await rentDetailsModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ messagae: "Updated successfully" })
}


exports.approveBooking = async(req, res) => {
    await bookings.findByIdAndUpdate(req.params.id, {
        $set: {
            approvalStatus: "approved",
            landLordChecked: 'true'
        }
    })

    res.status(200).json('approved')

}


exports.rejectBooking = async(req, res) => {
    const {landLordId} = await bookings.findById(req.params.id)

    await bookings.findByIdAndDelete(req.params.id)
    await UserModel.findByIdAndUpdate(landLordId,{$inc:{occupiedRooms:-1}}) 
    res.status(200).json('Rejected')
}




exports.getBookingDetails = async(req,res)=>{
    const bookingRoom = await bookings.find({
        landLordId:req.params.id,

    }).populate({
        path:'tenantId',
        select:'firstName'
    }).populate({
        path:'roomId',
        select:'roomNo '
    })

    res.status(200).json(bookingRoom)
}


exports.getTenantBookingDetails = async(req, res) => {
    
    const tenantDetails = await bookings.find({
        landLordId: req.params.id,
        approvalStatus: 'approved'
    }).populate({
        path: 'tenantId',
        select: 'firstName lastName address contact email'
    }).populate({
        path:'roomId',
        select:'roomNo'
    })
   
    res.status(200).json(tenantDetails)
}


exports.getTotalRooms = (req, res) => {
    rentDetailsModel.find({ landLordId: req.params.id }, (err, doc) => {
        if (err) {
            res.status(409).json(err)
        } else {
            res.status(200).json(doc)
        }
    })
}

exports.getAllApprovedRoooms = (req, res) => {
    bookings.find({ landLordId: req.params.id, approvalStatus: 'approved' }, (err, doc) => {
        if (err) {
            res.status(409).json(err)
        } else {
            res.status(200).json(doc)
        }
    })
}


exports.getAllPendingRooms = async(req, res) => {
    bookings.find({ landLordId: req.params.id, approvalStatus: 'pending' }, (err, doc) => {
        if (err) {
            res.status(409).json(err)
        } else {
            res.status(200).json(doc)
        }
    })
}
exports.graph = (req, res) => {
    bookings.aggregate([
        { $match: { landLordId: new ObjectID(req.params.id) } },
        { $group: { _id: { $month: "$bookedAt" }, count: { $count: {} } } },
        { $sort: { _id: 1 } }



    ], (err, doc) => {
        if (err) {
            res.send(err)
        } else {
            res.status(200).json(doc)
        }
    })
}