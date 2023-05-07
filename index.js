import app from './app.js';
import { sequelize } from './src/database/connection.js';

import './src/models/ParkingLot.js'
import './src/models/User.js'

async function main() {
    try {
        await sequelize.sync({force: false});
        app.listen(4000, () => {
            console.log("Server listening port 4000");
        });
    } catch (error) {
        console.log("Unable to connect to the database:",error);
    }
}

main();