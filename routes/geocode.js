const express = require('express');  
const router = express.Router();  
const { ParkingLot } = require('./models'); // Adjust to your models  

// Route to find nearest parking  
router.get('/find-nearest', async (req, res) => {  
    const { address } = req.query; // Assume address is passed as a query parameter  

    try {  
        const { lat, lng } = await getCoordinates(address); // Get coordinates from the address  

        // Find nearby parking lots; you can adjust the radius  
        const nearbyParkingLots = await ParkingLot.findAll({  
            where: {  
                // Assuming your ParkingLot model has latitude and longitude fields  
            }  
        });  

        // Return nearby parking lots to the client  
        res.json({ lat, lng, nearbyParkingLots });  
    } catch (error) {  
        console.error('Error finding nearest parking:', error);  
        res.status(500).send('Internal Server Error');  
    }  
});

module.exports = router;