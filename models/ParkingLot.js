const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

class ParkingLot extends Model {}  

ParkingLot.init({  
    name: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
    address: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
    totalSpots: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },  
    availableSpots: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },  
    latitude: {  
        type: DataTypes.FLOAT,  
        allowNull: false,  
    },  
    longitude: {  
        type: DataTypes.FLOAT,  
        allowNull: false,  
    },  
}, {  
    sequelize,  
    modelName: 'parking_lots',  
});  

module.exports = ParkingLot;