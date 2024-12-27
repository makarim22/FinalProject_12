'use strict';  
module.exports = {  
    up: async (queryInterface, Sequelize) => {  
        // Remove the existing coins column  
        await queryInterface.removeColumn('users', 'coins');  

        // Add the new balance column  
        await queryInterface.addColumn('users', 'balance', {  
            type: Sequelize.INTEGER,  
            defaultValue: 100000, // Set the initial balance to 100,000  
            allowNull: false,  
        });  
    },  
    down: async (queryInterface, Sequelize) => {  
        // Remove the balance column  
        await queryInterface.removeColumn('users', 'balance');  

        // Optionally add back the coins column if needed  
        await queryInterface.addColumn('users', 'coins', {  
            type: Sequelize.INTEGER,  
            defaultValue: 0, // Optional: you can modify this as per your requirement  
            allowNull: false,  
        });  
    }  
};