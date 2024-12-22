'use strict';  
module.exports = {  
    up: async (queryInterface, Sequelize) => {  
        await queryInterface.addColumn('users', 'coins', {  
            type: Sequelize.INTEGER,  
            defaultValue: 0, // Optional: initialize to zero  
            allowNull: false, // Set according to your business logic  
        });  
    },  
    down: async (queryInterface, Sequelize) => {  
        await queryInterface.removeColumn('users', 'coins');  
    }  
};
