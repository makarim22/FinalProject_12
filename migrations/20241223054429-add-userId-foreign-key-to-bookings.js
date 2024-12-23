'use strict';  

module.exports = {  
    up: async (queryInterface, Sequelize) => {  
        await queryInterface.addConstraint('bookings', {  
            fields: ['userId'],  
            type: 'foreign key',  
            name: 'fk_user_booking', // name of the constraint  
            references: {  
                table: 'users', // target table  
                field: 'id', // target column  
            },  
            onUpdate: 'CASCADE', // Optional: What to do on update  
            onDelete: 'CASCADE', // Optional: What to do on delete  
        });  
    },  
    down: async (queryInterface, Sequelize) => {  
        await queryInterface.removeConstraint('bookings', 'fk_user_booking');  
    }  
};