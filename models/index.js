'use strict';  

// models/index.js  
const fs = require('fs');  
const path = require('path');  
const Sequelize = require('sequelize');  
const process = require('process');  
const basename = path.basename(__filename);  
const env = process.env.NODE_ENV || 'development';  
const config = require(__dirname + '/../config/config.json')[env];  
const db = {};  

let sequelize;  
if (config.use_env_variable) {  
    sequelize = new Sequelize(process.env[config.use_env_variable], config);  
} else {  
    sequelize = new Sequelize(config.database, config.username, config.password, config);  
}  

// Load each model and initialize associations  
fs  
    .readdirSync(__dirname)  
    .filter(file => {  
        return (  
            file.indexOf('.') !== 0 &&  
            file !== basename &&  
            file.slice(-3) === '.js' &&  
            file.indexOf('.test.js') === -1  
        );  
    })  
    .forEach(file => {  
        const model = require(path.join(__dirname, file));  
        db[model.name] = model.init(sequelize, Sequelize.DataTypes); // Initialize and add model to db  
    });  

// Check if models were loaded correctly - Debugging  
console.log("Loaded models:", Object.keys(db));   

// Set up associations after all models are loaded  
if (db.Booking && db.ParkingLot) {  
    db.Booking.belongsTo(db.ParkingLot, { foreignKey: 'parkingLotId' }); // Booking references a ParkingLot  
    db.ParkingLot.hasMany(db.Booking, { foreignKey: 'parkingLotId' }); // A ParkingLot can have multiple Bookings  
}  

if (db.Booking && db.User) {  
    db.Booking.belongsTo(db.User, { foreignKey: 'userId' }); // Booking references a User  
    db.User.hasMany(db.Booking, { foreignKey: 'userId' }); // User can have multiple Bookings  
}  

db.sequelize = sequelize;  
db.Sequelize = Sequelize;  

module.exports = db;