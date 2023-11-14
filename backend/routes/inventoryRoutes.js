const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrganisationController, getOrganisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController');

const router = express.Router()

// routes
// ADD INVENTORY || POST
router.post('/create-inventory', authMiddleware, createInventoryController);

// GET ALL BLOOD RECORDS
router.get('/get-inventory',authMiddleware,getInventoryController);

// GET ALL RECENT  RECORDS
router.get('/get-recent-inventory',authMiddleware,getRecentInventoryController);

// GET HOSPITAL BLOOD RECORDS
router.post('/get-inventory-hospital',authMiddleware,getInventoryHospitalController);

// GET ALL DONAR RECORDS
router.get('/get-donars',authMiddleware,getDonarsController);

// GET ALL HOSPITAL RECORDS
router.get('/get-hospitals',authMiddleware,getHospitalController);

// GET ALL organisation RECORDS
router.get('/get-organisation',authMiddleware,getOrganisationController);

// GET ALL organisation RECORDS
router.get('/get-organisation-for-hospital',authMiddleware,getOrganisationForHospitalController);

module.exports = router;