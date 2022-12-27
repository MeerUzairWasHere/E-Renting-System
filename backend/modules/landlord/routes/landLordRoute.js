const express = require('express')
const router = express.Router()
const verifyToken = require('../../../middleware/VerifiedToken')


const {
    addRentDetails,
    deleteRentDetails,
    getallRentDetails,
    editRentDetails,
    notifiLandlord,
    approveBooking,
    rejectBooking,
    getBookingDetails,
    getTenantBookingDetails,
    getTotalRooms,
    getAllApprovedRoooms,
    getAllPendingRooms,
    graph


} = require('../controllers/LandLordController')
router.get('/send-notification/:id',verifyToken, notifiLandlord)
router.post('/add-rent-details', verifyToken,addRentDetails)
router.delete('/delete-rent-details/:id',verifyToken, deleteRentDetails)
router.get('/get-all-rent-details/:id',verifyToken, getallRentDetails)
router.put('/edit-rent-details/:id', verifyToken,editRentDetails)
router.put('/approve-booking/:id',verifyToken,approveBooking)
router.get('/get-booking-details/:id',verifyToken,getBookingDetails)
router.get('/get-tenant-booking-details/:id',verifyToken,getTenantBookingDetails )
router.get('/get-total-rooms/:id',verifyToken,getTotalRooms)
router.get('/get-all-approved-rooms/:id',verifyToken,getAllApprovedRoooms)
router.get('/get-all-pending-rooms/:id',verifyToken,getAllPendingRooms)
router.get('/landLord-monthly-booking/:id',verifyToken,graph)
router.delete('/reject-booking/:id',verifyToken,rejectBooking)

module.exports = router