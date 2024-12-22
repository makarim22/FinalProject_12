const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

class Booking extends Model {}  

Booking.init({  
    parkingLotId: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },  
    vehicleId: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },  
    userId: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },  
    startTime: {  
        type: DataTypes.DATE,  
        allowNull: false,  
    },  
    endTime: {  
        type: DataTypes.DATE,  
        allowNull: false,  
    },  
    totalCost: {  
        type: DataTypes.FLOAT,  
        allowNull: false,  
    },  
    duration: {  // New field for duration  
        type: DataTypes.FLOAT,  
        allowNull: false  
    }  
}, {  
    sequelize,  
    modelName: 'Booking',  
    tableName: 'bookings', 
    timestamps: true, // Automatically add createdAt and updatedAt fields   
});  

module.exports = Booking;