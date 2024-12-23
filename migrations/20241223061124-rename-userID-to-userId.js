'use strict';  

module.exports = {  
    up: async (queryInterface, Sequelize) => {  
        await queryInterface.renameColumn('bookings', 'userID', 'userId'); // Rename from userID to userId  
    },  
    down: async (queryInterface, Sequelize) => {  
        await queryInterface.renameColumn('bookings', 'userId', 'userID'); // Rollback the change if needed  
    }  
};