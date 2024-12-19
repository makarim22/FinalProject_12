const User = require('../models/User');  
const bcrypt = require('bcryptjs');  
const jwt = require('jsonwebtoken');  
const ParkingLot = require('../models/ParkingLot');


exports.register = async (req, res) => {  
    const { username, password, email } = req.body;  

    // Validate input  
    if (!username || !password || !email) {  
        return res.render('register', { error: 'All fields are required.' });  
    }  

    // Check if the user already exists  
    const existingUser = await User.findOne({ where: { username } });  
    if (existingUser) {  
        return res.render('register', { error: 'Username already exists' });  
    }  

    // Hash the password  
    const hashedPassword = await bcrypt.hash(password, 10);  

    // Create a new user  
    try {  
        await User.create({ username, password: hashedPassword, email });  
        res.redirect('/login'); // Redirect to login after successful registration  
    } catch (error) {  
        console.error('Error creating user:', error);  
        res.render('register', { error: 'Registration failed. Please try again.' });  
    }  
};  

// exports.login = async (req, res) => {  
//     const { username, password } = req.body;  
//     const user = await User.findOne({ where: { username } });  

//     if (user && await bcrypt.compare(password, user.password)) {  
//         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });  
//         res.json({ token }); // Send back the JWT token  
//         res.render('dashboard', {   
//             ParkingLot, // Assuming ParkingLot is defined in your code  
//             title: 'Dashboard' // You can set the title here  
//         });  
//     } else {  
//         res.render('login', { error: 'Invalid credentials' });  
//     }  
// };

exports.login = async (req, res) => {  
    const { username, password } = req.body;  
    const user = await User.findOne({ where: { username } });  

    if (user && await bcrypt.compare(password, user.password)) {  
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });  
        
        // Redirect to the dashboard with the token in the session (or set it in local storage in the client)  
        req.session.token = token;
        req.session.userId = user.id; // Store the token in the session if using session storage  
        return res.redirect('/dashboard');  
    } else {  
        res.render('login', { error: 'Invalid credentials' });  
    }  
}; 

// exports.login = async (req, res) => {  
//     const { username, password } = req.body;  
//     const user = await User.findOne({ where: { username } });  

//     if (user && await bcrypt.compare(password, user.password)) {  
//         req.session.userId = user.id; // Store the userId in session  

//         // Redirect or render the desired page  
//         return res.redirect('/dashboard');  
//     } else {  
//         res.render('login', { error: 'Invalid credentials' });  
//     }  
// };
