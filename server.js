const express = require('express');  
const bodyParser = require('body-parser');  
const session = require('express-session');  
const sequelize = require('./config/database');  

/// define routes
const authRoutes = require('./routes/authRoutes');  
const parkingRoutes = require('./routes/parkingRoutes');  
const bookingRoutes = require('./routes/bookingRoutes');
const profileRoutes = require('./routes/profileRoutes'); 
const homeRoutes = require('./routes/homeRoutes');  
const dashboardRoutes = require('./routes/dashboardRoutes');
const ticketRoutes = require('./routes/ticketRoutes'); //
const cors = require('cors');  
require('dotenv').config();  

const app = express();  
const PORT = process.env.PORT || 3000;  


// Setup session middleware  
app.use(session({  
    secret: '221998', // Replace with a strong secret key  
    resave: false,  
    saveUninitialized: true,  
    cookie: { secure: false } // Set to true in production with HTTPS  
}));  

// Other middlewares and routes...
// Middleware  
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  
app.use(express.json());  
app.use(cors());  

app.set('view engine', 'ejs');  
app.set('views', './views');  


// Routes  
app.use('/', homeRoutes);  
app.use('/', authRoutes); // Add the authentication routes  
app.use('/', dashboardRoutes); // Add dashboard routes here   
app.use('/', parkingRoutes);  
app.use('/', bookingRoutes); 
app.use('/', profileRoutes);
app.use('/', ticketRoutes);  // Add the profile routes here 


// Start the server  
app.listen(PORT, async () => {  
    try {  
        await sequelize.authenticate();  
        console.log(`Server is running on http://localhost:${PORT}`);  
    } catch (error) {  
        console.error('Unable to connect to the database:', error);  
    }  
});