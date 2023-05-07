import express from 'express';
import usersRoute from './src/routes/users.routes.js';
import parkingLotsRoute from './src/routes/parking.lots.routes.js';

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/users', usersRoute);
app.use('/parkinglots', parkingLotsRoute)

export default app;