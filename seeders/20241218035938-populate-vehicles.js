'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {  
  up: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkInsert('vehicles', [  
      {  
        id: 1,  
        userId: 1,
        licensePlate: 'F 1234',  
        model: 'Camry',  
        color: 'Blue',    
        createdAt: new Date(),  
        updatedAt: new Date(),  
      },  
      {  
        id: 2,  
        userId: 2,
        licensePlate: 'F 2234',  
        model: 'Kijang',  
        color: 'Yellow',    
        createdAt: new Date(),  
        updatedAt: new Date(),  
      },  
      // Add more vehicles as needed  
    ], {});  
  },  

  down: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkDelete('vehicles', null, {});  
  },  
};  

