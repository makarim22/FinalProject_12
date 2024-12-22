
'use strict';  

module.exports = {  
    up: async (queryInterface, Sequelize) => {  
        // Add columns for motorcycle and car capacities  
        await queryInterface.addColumn('parking_lots', 'motorcycleCapacity', {  
            type: Sequelize.INTEGER,  
            allowNull: true,  
        });  
        await queryInterface.addColumn('parking_lots', 'carCapacity', {  
            type: Sequelize.INTEGER,  
            allowNull: true,  
        });  

        // Add columns for available spots  
        await queryInterface.addColumn('parking_lots', 'motorcycleAvailableSpot', {  
            type: Sequelize.INTEGER,  
            allowNull: true,  
        });  
        await queryInterface.addColumn('parking_lots', 'carAvailableSpot', {  
            type: Sequelize.INTEGER,  
            allowNull: true,  
        });  

        // Add tariff columns for motorcycle and car  
        await queryInterface.addColumn('parking_lots', 'motorcycle_tariff', {  
            type: Sequelize.FLOAT,  // Assuming tariff values will be decimal  
            allowNull: true,  
        });  
        await queryInterface.addColumn('parking_lots', 'car_tariff', {  
            type: Sequelize.FLOAT,  // Assuming tariff values will be decimal  
            allowNull: true,  
        });  

        // Drop the total_spots column if it exists  
        await queryInterface.removeColumn('parking_lots', 'totalSpots');
        await queryInterface.removeColumn('parking_lots', 'availableSpots');    
    },  

    down: async (queryInterface, Sequelize) => {  
        // Remove the added columns in case of rollback  
        await queryInterface.removeColumn('parking_lots', 'motorcycleCapacity');  
        await queryInterface.removeColumn('parking_lots', 'carCapacity');  
        await queryInterface.removeColumn('parking_lots', 'motorcycleAvailableSpot');  
        await queryInterface.removeColumn('parking_lots', 'carAvailableSpot');  
        await queryInterface.removeColumn('parking_lots', 'motorcycle_tariff');  
        await queryInterface.removeColumn('parking_lots', 'car_tariff');  

        // Optionally, add the total_spots column back  
        await queryInterface.addColumn('parking_lots', 'totalSpots', {  
            type: Sequelize.INTEGER,  
            allowNull: true,  
        });  
        await queryInterface.addColumn('parking_lots', 'availableSpots', {  
          type: Sequelize.INTEGER,  
          allowNull: true,  
      });  
    },  
};
