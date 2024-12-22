'use strict';  
module.exports = {  
    up: async (queryInterface, Sequelize) => {  
        await queryInterface.addColumn('bookings', 'duration', {  
            type: Sequelize.FLOAT, // Keep it as FLOAT or use INTEGER if you want whole hours  
            allowNull: true,  
        });  
    },  
    down: async (queryInterface, Sequelize) => {  
        await queryInterface.removeColumn('bookings', 'duration');  
    }  
};