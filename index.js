import app from './app.js';
import { sequelize } from './src/database/connection.js';

import './src/models/ParkingLot.js'
import './src/models/User.js'
import './src/models/Token.js'
import { ParkingLot } from './src/models/ParkingLot.js';

async function main() {
    try {
        //cuando sea true se va a reiniciar la base de datos cada que inicien el servidor
        await sequelize.sync({force: true});

        //Estacionamientos de ejemplo
        await ParkingLot.create({city: "Mexicali",faculty: "Central",identifier: "F",capacity: 120,latitude: 32.631568,longitude: -115.442809, type: 'Docentes'});

        await ParkingLot.create({city: "Mexicali",faculty: "Central",identifier: "D",capacity: 120,latitude: 32.632635,longitude: -115.442786, type: 'Alumnos'});

        await ParkingLot.create({city: "Mexicali",faculty: "Central",identifier: "C",capacity: 120,latitude: 32.6336638,longitude: -115.4428034, type: 'Público'});

        await ParkingLot.create({city: "Tijuana",faculty: "Idiomas",identifier: "I",capacity: 120,latitude: 32.6286646,longitude: -115.437766, type: 'Alumnos'});

        //La IP se pone para que esté disponible en la red
        app.listen(4000, '192.168.37.5', () => {
            console.log("Server listening port 4000");
        });
    } catch (error) {
        console.log("Unable to connect to the database:",error);
    }
}

main();
