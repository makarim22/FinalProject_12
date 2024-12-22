const ParkingLot = require('../models/ParkingLot'); 
const User = require('../models/User');
const Booking = require('../models/Booking'); 

// exports.book = async (req, res) => {  
//     try {
//         const userId = req.session.userId; 
//         const { parkingLotId, vehicleType, startTime, endTime } = req.body;  

//         if (!userId || !parkingLotId || !vehicleType || !startTime || !endTime) {
//             return res.status(400).send('Please provide all required fields.');
//         }

//         const start = new Date(startTime);  
//         const end = new Date(endTime);  

//         if (start >= end) {  
//             return res.status(400).send('End time must be after start time.');  
//         }  

//         const parkingLot = await ParkingLot.findByPk(parkingLotId);  
//         if (!parkingLot) {  
//             return res.status(404).send('Parking Lot not found.');  
//         }  

//         let vehicleId;
//         let tariff;
//         switch (vehicleType) {
//             case 'motorcycle':
//                 vehicleId = 1; 
//                 tariff = parkingLot.motorcycle_tariff;
//                 break;
//             case 'car':
//                 vehicleId = 2; 
//                 tariff = parkingLot.car_tariff;
//                 break;
//             default:
//                 return res.status(400).send('Invalid vehicle type specified.');  
//         }

//         const durationInHours = Math.ceil((end - start) / (1000 * 60 * 60)); 
//         const totalCost = tariff * durationInHours;  

//         const booking = await Booking.create({  
//             parkingLotId,  
//             vehicleId,  
//             userId,  
//             startTime: start,  
//             endTime: end,  
//             duration: durationInHours, 
//             totalCost : totalCost, 
//         });  

//         res.status(201).send(`Booking successful. Total Cost: $${totalCost}`);  
//     } catch (error) {  
//         console.error('Error creating booking:', error); 
//         res.status(500).send('An error occurred while processing your booking.');  
//     }  
// };

exports.book = async (req, res) => {  
    try {  
        const userId = req.session.userId;   
        const { parkingLotId, vehicleType, startTime, endTime } = req.body;  

        if (!userId || !parkingLotId || !vehicleType || !startTime || !endTime) {  
            return res.status(400).send('Please provide all required fields.');  
        }  

        const start = new Date(startTime);  
        const end = new Date(endTime);  

        if (start >= end) {  
            return res.status(400).send('End time must be after start time.');  
        }  

        const parkingLot = await ParkingLot.findByPk(parkingLotId);  
        if (!parkingLot) {  
            return res.status(404).send('Parking Lot not found.');  
        }  

        let vehicleId;  
        let tariff;  
        switch (vehicleType) {  
            case 'motorcycle':  
                vehicleId = 1;   
                tariff = parkingLot.motorcycle_tariff;  
                break;  
            case 'car':  
                vehicleId = 2;   
                tariff = parkingLot.car_tariff;  
                break;  
            default:  
                return res.status(400).send('Invalid vehicle type specified.');  
        }  

        const durationInHours = Math.ceil((end - start) / (1000 * 60 * 60));   
        const totalCost = tariff * durationInHours;  

        const booking = await Booking.create({  
            parkingLotId,  
            vehicleId,  
            userId,  
            startTime: start,  
            endTime: end,  
            duration: durationInHours,   
            totalCost : totalCost  
        });  

        // Redirect to the ticket generation route with the booking ID  
        res.redirect(`/ticket/${booking.id}`);  
    } catch (error) {  
        console.error('Error creating booking:', error);   
        res.status(500).send('An error occurred while processing your booking.');  
    }  
};