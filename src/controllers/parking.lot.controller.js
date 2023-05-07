import { ParkingLot } from "../models/ParkingLot.js";
import { User } from "../models/User.js";

export const getParkingLots = async (req, res) => {
    try {
        const response = [];
        const parkingLots = await ParkingLot.findAll();

        //Get amount of users in each parkingLot
        for(let i = 0; i < parkingLots.length; i++){
            const amount = await User.count({
                where: {
                    parking_id: parkingLots[i].id
                }
            });

            response.push({
                parkingLot: parkingLots[i],
                amount
            });
        }

        res.json(response);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createParkingLot = async (req, res) => {
   try {
        const { city, faculty, identifier, capacity, latitude, longitude } = req.body;

        const newParkingLot = await ParkingLot.create({
            city, faculty, identifier, capacity, latitude, longitude
        });

        res.json({parkingLot: newParkingLot});
   } catch (error) {
        res.status(500).json({message: error.message});
   }
}

export const getParkingLotsWithCity = async (req, res) => {
    try {
        const response = [];
        const city = req.params.city;

        const parkingLots = await ParkingLot.findAll({
            where: {
                city
            }
        });

        //Get amount of users in each parkingLot
        for(let i = 0; i < parkingLots.length; i++){
            const amount = await User.count({
                where: {
                    parking_id: parkingLots[i].id
                }
            });

            response.push({
                parkingLot: parkingLots[i],
                amount
            });
        }

        res.json(response);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getParkingLotsWithCityAndFaculty = async (req, res) => {
    try {
        const response = [];
        const { city, faculty } = req.params;

        const parkingLots = await ParkingLot.findAll({
            where: {
                city,
                faculty
            }
        });

        //Get amount of users in each parkingLot
        for(let i = 0; i < parkingLots.length; i++){
            const amount = await User.count({
                where: {
                    parking_id: parkingLots[i].id
                }
            });

            response.push({
                parkingLot: parkingLots[i],
                amount
            });
        }

        res.json(response);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}