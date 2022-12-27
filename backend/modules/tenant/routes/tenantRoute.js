const express = require('express')
const router = express.Router()
const verifyToken = require('../../../middleware/VerifiedToken')


const {getAllRentDetailsTenent, applyForRooom,viewRoomDetails,checkOut, availableForBooking, getTenantDetails} = require('../controllers/tenantController')



router.get('/get-tenant-rent-details',verifyToken,verifyToken,getAllRentDetailsTenent)
router.get('/view-room-details/:id',verifyToken,viewRoomDetails)
router.post('/apply-for-room/:id',verifyToken,applyForRooom)
router.get('/checkOut-tenant/:id',verifyToken,checkOut)
router.get('/availabe-for-booking/:id',verifyToken,availableForBooking)
router.get('/get-tenant-details/:id',verifyToken,getTenantDetails)

module.exports= router; 