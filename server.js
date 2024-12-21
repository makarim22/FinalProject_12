const express = require('express');  
const bodyParser = require('body-parser');  
const session = require('express-session');  
const sequelize = require('./config/database');  
/// define routes
const authRoutes = require('./routes/authRoutes');  
const parkingRoutes = require('./routes/parkingRoutes');  
const paymentRoutes = require('./routes/paymentRoutes');  
const homeRoutes = require('./routes/homeRoutes');  
const dashboardRoutes = require('./routes/dashboardRoutes');
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
// app.use(session({  
//     secret: 'G7$k9@zP2#qW8!fR3^mN6&vT1*eY5$hJ',  
//     resave: false,  
//     saveUninitialized: true,  
// }));  
app.set('view engine', 'ejs');  
app.set('views', './views');  

// // Landing Page Route  
// app.get('/', (req, res) => {  
//     res.render('index'); // Render the landing page  
// });  

// Routes  
app.use('/', homeRoutes);  
app.use('/', authRoutes); // Add the authentication routes  
app.use('/', dashboardRoutes); // Add dashboard routes here   
app.use('/', parkingRoutes);  
app.use('/payment', paymentRoutes);  

// Start the server  
app.listen(PORT, async () => {  
    try {  
        await sequelize.authenticate();  
        console.log(`Server is running on http://localhost:${PORT}`);  
    } catch (error) {  
        console.error('Unable to connect to the database:', error);  
    }  
});