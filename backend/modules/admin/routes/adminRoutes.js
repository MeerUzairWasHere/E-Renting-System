const express = require('express')
const router = express.Router()
const verifyToken = require('../../../middleware/VerifiedToken')
const {
     getAllLandLords,
     getAllTenants,
      getAvailableRooms, 
      updateLandlord,
      getLandLordInfo,
       getOccupiedRooms,
        addLandLord,
         removeLandLord,
          getTenantInfo, 
          getRentInfo,
          removeTenant,
           editTenat,
            addTenant,
            deleteRentInfo,
            editRentInfo,
            editAllTenant,
            pieGraph } = require('../controllers/adminController')

router.get('/get-landlords',verifyToken, getAllLandLords)
router.get('/get-tenants', verifyToken,getAllTenants)

router.get('/get-available-rooms',verifyToken, getAvailableRooms)

router.get('/get-occupied-rooms',verifyToken, getOccupiedRooms)
router.post('/add-landlord',verifyToken, addLandLord)
router.put('/update-landlord/:id',verifyToken, updateLandlord)
router.get('/get-landlord-details',verifyToken,getLandLordInfo)
router.get('/tenant-details',verifyToken,getTenantInfo)

router.delete('/remove-landlord/:id',verifyToken, removeLandLord)
router.post('/add-tenant',verifyToken,addTenant)
router.put('/edit-tenant/:id',verifyToken,editTenat)
router.delete('/remove-tenant/:id',verifyToken,removeTenant)
router.get('/rent-info',verifyToken,getRentInfo)
router.put('/edit-rent-info/:id',verifyToken,editRentInfo)
router.delete('/delete-rent-info/:id',verifyToken,deleteRentInfo)
router.put('/edit-all-tenant/:id',verifyToken,editAllTenant)

router.get('/room-types',pieGraph)
 

module.exports = router;