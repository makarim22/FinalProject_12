const express = require('express');  
const router = express.Router();  
const parkingController = require('../controllers/parkingController');  
const { authenticateJWT } = require('../middleware/authMiddleware');  

// Dashboard route  
router.get('/dashboard',  parkingController.dashboard);  
router.post('/book',  parkingController.bookParking);  

module.exports = router;