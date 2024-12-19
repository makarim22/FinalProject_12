const { DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

const Reservation = sequelize.define('Reservation', {  
    userId: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
        references: {  
            model: 'users',  
            key: 'id',  
        },  
    },  
    parkingLotId: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
        references: {  
            model: 'parking_lots',  
            key: 'id',  
        },  
    },  
    vehicleId: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
        references: {  
            model: 'vehicles',  
            key: 'id',  
        },  
    },  
    reservationDate: {  
        type: DataTypes.DATE,  
        defaultValue: DataTypes.NOW,  
    },  
    paymentStatus: {  
        type: DataTypes.STRING,  
        defaultValue: 'Pending',  
    },  
}, {  
    tableName: 'reservations',  
    timestamps: true,  
});  

module.exports = Reservation;