const express = require('express');  
const router = express.Router();  
const authController = require('../controllers/authController'); // Ensure this import is correct  
const parkingController = require('../controllers/parkingController');  
const { authenticateJWT } = require('../middleware/authMiddleware');  

 
// Registration route  
router.get('/register', (req, res) => {  
    res.render('register', { error: null }); // Render the registration page with no error initially  
});  

router.post('/register', authController.register); 
// Login route  
router.get('/login', (req, res) => {  
    res.render('login', { error: null }); // Render the login page  
});  

router.post('/login', authController.login);  

// Dashboard route  
// router.get('/dashboard', authenticateJWT, parkingController.dashboard);  
// // router.get('/dashboard', parkingController.dashboard); 
// router.post('/book', authenticateJWT, parkingController.bookParking);  

module.exports = router;

///
// const express = require('express');  
// const router = express.Router();  
// const parkingController = require('../controllers/parkingController'); // Keep this import  

// // // Dashboard route (no authentication required)  
// // router.get('/dashboard', parkingController.dashboard); // Load dashboard without authentication  

// // You can add other routes here as needed, such as booking parking  
// // router.post('/book', parkingController.bookParking); // Assuming this is still needed  

// module.exports = router;
// ///