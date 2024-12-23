'use strict';  

module.exports = {  
    up: async (queryInterface, Sequelize) => {  
        await queryInterface.renameColumn('bookings', 'userID', 'userId'); // Assuming it's currently named 'userid'  
    },  
    down: async (queryInterface, Sequelize) => {  
        await queryInterface.renameColumn('bookings', 'userId', 'userid');  
    }  
};