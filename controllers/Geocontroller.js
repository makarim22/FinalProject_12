const axios = require('axios');  

require('dotenv').config();  
const axios = require('axios'); // Ensure axios is imported  

const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY; // Use your OpenCage API key  

async function getCoordinates(address) {  
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {  
        params: {  
            q: address, // OpenCage uses 'q' instead of 'address'  
            key: OPENCAGE_API_KEY,  
            pretty: 1 // Optional: Makes the response more readable  
        }  
    });  

    if (response.data.status.code === 200) { // Check if the status code is 200  
        const location = response.data.results[0].geometry; // Get geometry from the results  
        return {  
            lat: location.lat,  
            lng: location.lng  
        };  
    } else {  
        throw new Error('Geocoding failed: ' + response.data.status.message); // Use status.message for description  
    }  
}  

// Example usage  
(async () => {  
    try {  
        const coordinates = await getCoordinates('1600 Amphitheatre Parkway, Mountain View, CA');  
        console.log('Coordinates:', coordinates);  
    } catch (error) {  
        console.error(error.message);  
    }  
})();