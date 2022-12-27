const express = require('express')
const router = express.Router()

const {
    changePassword,
    getProfileDetails,
    editUser,
    myBookings
} = require('../controllers/sharedController')

router.patch('/change-password/:id', changePassword)
router.get('/profile-details/:id', getProfileDetails)
router.put('/edit-user/:id', editUser)
router.get('/my-bookings/:id', myBookings)

module.exports = router