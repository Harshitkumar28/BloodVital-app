// made for tests

const express = require('express');
const { testController } = require('../controllers/testController');

// router object this will store the router functionality not all
const router = express.Router();

// routes
router.get("/", testController);

// export
module.exports = router;
