const sequelize = require('./config/database');  
const ParkingLot = require('./models/ParkingLot');  

const populateParkingLots = async () => {  
    try {  
        await sequelize.authenticate(); // Test the connection  
        console.log('Connection has been established successfully.');  

        // Dummy parking lot data for Bandung, West Java and Jakarta  
        const parkingLots = [  
            // Existing Bandung parking lots  
             
            // New parking lots data for Jakarta  
            {  
                name: 'Grand Indonesia Mall Parking',  
                address: 'Jl. M.H. Thamrin No.1, Jakarta',  
                latitude: -6.1969,  
                longitude: 106.8232,  
                motorcycle_tariff: 2000.00,  
                car_tariff: 8000.00,  
                motorcycleCapacity: 200,  
                carCapacity: 300,  
                motorcycleAvailableSpot: 100,  
                carAvailableSpot: 200,  
            },  
            {  
                name: 'Senayan Park Parking Lot',  
                address: 'Jl. Asia Afrika No.8, Jakarta',  
                latitude: -6.2307,  
                longitude: 106.8050,  
                motorcycle_tariff: 3000.00,  
                car_tariff: 7000.00,  
                motorcycleCapacity: 100,  
                carCapacity: 100,  
                motorcycleAvailableSpot: 50,  
                carAvailableSpot: 50,  
            },  
            {  
                name: 'Jakarta International Expo Parking',  
                address: 'Jl. Jenderal Sudirman No.55, Jakarta',  
                latitude: -6.1862,  
                longitude: 106.8621,  
                motorcycle_tariff: 2500.00,  
                car_tariff: 7500.00,  
                motorcycleCapacity: 150,  
                carCapacity: 250,  
                motorcycleAvailableSpot: 120,  
                carAvailableSpot: 180,  
            },  
            // New additional parking lots for Jakarta  
            {  
                name: 'Plaza Senayan Parking',  
                address: 'Jl. Asia Afrika No.8, Jakarta',  
                latitude: -6.2294,  
                longitude: 106.8031,  
                motorcycle_tariff: 3000.00,  
                car_tariff: 8000.00,  
                motorcycleCapacity: 150,  
                carCapacity: 250,  
                motorcycleAvailableSpot: 75,  
                carAvailableSpot: 150,  
            },  
            {  
                name: 'Pusat Grosir Slipi Parking',  
                address: 'Jl. S. Parman No.18, Jakarta',  
                latitude: -6.1951,  
                longitude: 106.8148,  
                motorcycle_tariff: 2000.00,  
                car_tariff: 6000.00,  
                motorcycleCapacity: 100,  
                carCapacity: 200,  
                motorcycleAvailableSpot: 50,  
                carAvailableSpot: 100,  
            },  
            {  
                name: 'Central Park Mall Parking',  
                address: 'Jl. Letjen S. Parman No.28, Jakarta',  
                latitude: -6.1792,  
                longitude: 106.7854,  
                motorcycle_tariff: 2500.00,  
                car_tariff: 7000.00,  
                motorcycleCapacity: 120,  
                carCapacity: 250,  
                motorcycleAvailableSpot: 90,  
                carAvailableSpot: 180,  
            },  
            {  
                name: 'Kota Kasablanka Mall Parking',  
                address: 'Jl. Casablanca No.88, Jakarta',  
                latitude: -6.2303,  
                longitude: 106.8457,  
                motorcycle_tariff: 3000.00,  
                car_tariff: 6000.00,  
                motorcycleCapacity: 100,  
                carCapacity: 150,  
                motorcycleAvailableSpot: 40,  
                carAvailableSpot: 100,  
            },  
            {  
                name: 'Tanjung Duren Parking Lot',  
                address: 'Jl. Tanjung Duren Raya No.1, Jakarta',  
                latitude: -6.1692,  
                longitude: 106.7664,  
                motorcycle_tariff: 2500.00,  
                car_tariff: 6000.00,  
                motorcycleCapacity: 80,  
                carCapacity: 120,  
                motorcycleAvailableSpot: 60,  
                carAvailableSpot: 90,  
            },  
            {  
                name: 'Gandaria City Parking',  
                address: 'Jl. Sultan Iskandar Muda No.99, Jakarta',  
                latitude: -6.2275,  
                longitude: 106.8047,  
                motorcycle_tariff: 2500.00,  
                car_tariff: 7000.00,  
                motorcycleCapacity: 150,  
                carCapacity: 300,  
                motorcycleAvailableSpot: 100,  
                carAvailableSpot: 200,  
            },  
            {  
                name: 'Lippo Mall Puri Parking',  
                address: 'Jl. Puri Raya No.55, Jakarta',  
                latitude: -6.1752,  
                longitude: 106.7599,  
                motorcycle_tariff: 2000.00,  
                car_tariff: 6000.00,  
                motorcycleCapacity: 120,  
                carCapacity: 250,  
                motorcycleAvailableSpot: 90,  
                carAvailableSpot: 140,  
            },  
            {  
                name: 'Mall Kelapa Gading Parking',  
                address: 'Jl. Kelapa Gading No.1, Jakarta',  
                latitude: -6.1362,  
                longitude: 106.8957,  
                motorcycle_tariff: 2500.00,  
                car_tariff: 6500.00,  
                motorcycleCapacity: 180,  
                carCapacity: 320,  
                motorcycleAvailableSpot: 150,  
                carAvailableSpot: 200,  
            },  
        ];  

        // Insert dummy data into the parking_lots table  
        await ParkingLot.bulkCreate(parkingLots);  
        console.log('Dummy parking lots have been added successfully.');  

    } catch (error) {  
        console.error('Unable to connect to the database or insert data:', error);  
    } finally {  
        await sequelize.close(); // Close the connection  
    }  
};  

populateParkingLots();