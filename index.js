import app from './app.js';
import { sequelize } from './src/database/connection.js';

import './src/models/ParkingLot.js'
import './src/models/User.js'
import './src/models/Token.js'
import { ParkingLot } from './src/models/ParkingLot.js';

async function main() {
    try {
        await sequelize.sync({force: true});

        await ParkingLot.create({city: "Mexicali",faculty: "Central",identifier: "F",capacity: 120,latitude: 32.631568,longitude: -115.442809, type: 'Docentes'});

        await ParkingLot.create({city: "Mexicali",faculty: "Central",identifier: "D",capacity: 120,latitude: 32.632635,longitude: -115.442786, type: 'Alumnos'});

        await ParkingLot.create({city: "Mexicali",faculty: "Central",identifier: "C",capacity: 120,latitude: 32.6336638,longitude: -115.4428034, type: 'Público'});

        await ParkingLot.create({city: "Tijuana",faculty: "Idiomas",identifier: "I",capacity: 120,latitude: 32.6286646,longitude: -115.437766, type: 'Alumnos'});

        app.listen(4000, '192.168.1.73', () => {
            console.log("Server listening port 4000");
        });
    } catch (error) {
        console.log("Unable to connect to the database:",error);
    }
}

main();