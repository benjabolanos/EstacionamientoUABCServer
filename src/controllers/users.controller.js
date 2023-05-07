import { Op } from "sequelize";
import { User } from "../models/User.js";
import { ParkingLot } from "../models/ParkingLot.js";

export const getUsers = (req, res) => {
    User.findAll({
        include: [{
            model: ParkingLot,
            as: 'parkingLot'
        }]
    })
    .then((users) => {
        res.json({users});
    }).catch((error) => {
        res.status(500).json({message: error.message});
    });
}

export const createUser = (req, res) => {
    User.create({email, number_id})
    .then((user) => {
        res.json({ user });
    }).catch((error) => {
        res.status(500).json({message: error.message});
    });
}

export const getUserByNumberIdOrEmail = (req, res) => {
    const query = req.params.query;

    User.findOne({
        where: {
            [Op.or]:[
                {email: query},
                {number_id: query}
            ]
        }, include: [{
            model: ParkingLot,
            as: 'parkingLot'
        }]
    }).then((user) => {
        if(!user) {
            return res.status(404).json({user});
        }

        res.json({user});
    }).catch((error) => {
        res.status(500).json({message: error.message});
    });
}

export const setUserParkingLot = async (req, res) => {
    try {
        const newParkingLot = req.params.parkingId;

        const user = await User.findOne({where: {email: req.params.email}});

        if(!user) throw new Error('User not found');

        if (newParkingLot === 'null'){
            await user.update({ number_id: null});
        } else {
            await user.update({ number_id: newParkingLot });
        }

        res.json({message: 'User updated'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
