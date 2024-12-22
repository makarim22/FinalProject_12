// controllers/profileController.js  
const ParkingLot = require('../models/ParkingLot'); 
const User = require('../models/User');
// const Booking = require('../models/Booking'); 

// Profile view controller  
exports.getProfile = async (req, res) => {  
    if (!req.session.userId) {  
        return res.redirect('/login'); // Redirect to login if not authenticated  
    }  

    try {  
        // Fetch the logged-in user's information  
        const user = await User.findByPk(req.session.userId, {  
            attributes: ['username', 'email', 'coins'], // Select necessary fields  
        });  

        // If user is not found, redirect or send an error  
        if (!user) {  
            return res.redirect('/login');  
        }  

        // Fetch the user's booking history, joining with ParkingLot to get the name  
        // const book_history = Booking.findAll({  
        //     where: { userId: user.id }, // Get bookings related to this user  
        //     include: [{ model: ParkingLot, attributes: ['name'] }], // Include parking lot info  
        // });  

        // Render the profile view with user and bookings data  
        res.render('profile', { user });  
    } catch (error) {  
        console.error('Error fetching profile:', error);  
        res.status(500).send('An error occurred while retrieving the profile.');  
    }  
};