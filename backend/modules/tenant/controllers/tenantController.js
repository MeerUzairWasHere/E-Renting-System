const rentDetailsModel = require('../../../models/rentDetails')
const bookingDetailsModel = require('../../../models/bookings')
const userModel = require('../../../models/User')





exports.getAllRentDetailsTenent= (req,res)=>{
         rentDetailsModel.find({},(err,doc)=>{
             if(err){
                    res.send(err)
             }else{
                 res.status(200).json(doc)
             }
         })
} 


exports.viewRoomDetails = (req,res)=>{
    const query = req.params.id
      rentDetailsModel.findById(query,(err,doc)=>{
        if(err){
            res.send(err)
        }else{
            res.status(200).json(doc)
        }
    })
}
 
exports.applyForRooom= async (req,res)=>{  
    const query= req.params.id
    const roomDetails = await rentDetailsModel.findById(query)
    const {tenantId,landLordId}=  req.body
     const {firstName} = await userModel.findOne({_id:tenantId})
    
     req.body.roomId = roomDetails._id;
     const appliedRoom = new bookingDetailsModel(req.body)
     const message=`${firstName}  is requesting for your room with ${req.params.id} to be approved `

     appliedRoom.approvalStatus = 'pending'
     appliedRoom.notification = message
     appliedRoom.save()
     await userModel.findByIdAndUpdate(landLordId,{$inc:{ occupiedRooms:1}})

    // await  userModel.findOneAndUpdate({_id:landLordId},{$set:{notifications:message}})


    return res.status(200).json({info:'Your request has been sent for Approval'})
}


exports.availableForBooking=async(req,res)=>{
   const bookingDetails=  await bookingDetailsModel.findOne({roomId:req.params.id})
   if(bookingDetails){
    return res.status(200).json(bookingDetails.approvalStatus)

   }

  return res.status(200).json('notApplied')
    
}



exports.getTenantDetails = (req,res)=>{
        const query ={_id:req.params.id}
         userModel.findById(query,(err,doc)=>{
            if(err){
                res.status(400).json(err)
            }else{
                res.status(200).json(doc)
            }
        })
}



exports.checkOut = async(req,res)=>{
    
    const query = {roomId: req.params.id }
    await bookingDetailsModel.findOneAndDelete(query)
    const checkOutRoom =  await rentDetailsModel.findByIdAndUpdate(req.params.id,{$set:{booked:false}},{new:true})
     
    res.status(200).json({info:`Successfully checkedOut`,checkOutRoom})
}