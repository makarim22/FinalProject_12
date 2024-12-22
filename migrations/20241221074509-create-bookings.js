'use strict';  
module.exports = {  
    up: async (queryInterface, Sequelize) => {  
        await queryInterface.createTable('bookings', {  
            id: {  
                type: Sequelize.INTEGER,  
                autoIncrement: true,  
                primaryKey: true,  
            },  
            parkingLotId: {  
                type: Sequelize.INTEGER,  
                allowNull: false,  
                references: {  
                    model: 'parking_lots', // Assuming this matches your ParkingLot model  
                    key: 'id',  
                },  
            },  
            vehicleId: {  
                type: Sequelize.INTEGER,  
                allowNull: false,  
            },  
            userId: {  
                type: Sequelize.INTEGER,  
                allowNull: false,  
            },  
            startTime: {  
                type: Sequelize.DATE,  
                allowNull: false,  
            },  
            endTime: {  
                type: Sequelize.DATE,  
                allowNull: false,  
            },  
            totalCost: {  
                type: Sequelize.FLOAT,  
                allowNull: false,  
            },  
            createdAt: {  
                allowNull: false,  
                type: Sequelize.DATE,  
            },  
            updatedAt: {  
                allowNull: false,  
                type: Sequelize.DATE,  
            },  
        });  
    },  
    down: async (queryInterface, Sequelize) => {  
        await queryInterface.dropTable('bookings');  
    },  
};