import { Op } from "sequelize";
import { User } from "../models/User.js";
import { ParkingLot } from "../models/ParkingLot.js";
import { Token } from "../models/Token.js";
import { create_token } from "../encrypt.js";

export const getUsers = (req, res) => {
    User.findAll({
        include: [{
            model: ParkingLot,
            as: 'ParkingLot'
        }]
    })
    .then((users) => {
        res.json(users);
    }).catch((error) => {
        res.status(500).json({message: error.message});
    });
}

export const createUser = async (req, res) => {
    const { email, number_id } = req.body;

    try {
        const user = await User.create({email, number_id});
        await create_uToken(number_id, user.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
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
            as: 'ParkingLot'
        }]
    }).then((user) => {
        if(!user) {
            return res.status(404).json(user);
        }

        res.json(user);
    }).catch((error) => {
        res.status(500).json({message: error.message});
    });
}

export const setUserParkingLot = async (req, res) => {
    try {
        const newParkingLot = req.params.parkingId;
        const userToken = req.params.token;

        console.log("User token:", userToken);
        console.log("Parking Id:", newParkingLot)

        const token = await Token.findOne({ where: {token: userToken} });
        if(!token) throw new Error('Token not found');

        const user = await User.findOne({where: {id: token.user_id}});
        if(!user) throw new Error('User not found');

        if (newParkingLot === 'null'){
            await user.update({ parking_id: null});
        } else {
            await user.update({ parking_id: newParkingLot });
        }
        console.log("Exito al autorizar");
        console.log(user.toJSON());
        res.json({message: 'User updated'});
    } catch (error) {
        console.log("Error al autorizar", error.message);
        res.status(500).json({message: error.message});
    }
}

export const getUserToken = async (req, res) => {
    try {
        const userId = req.params.userId;

        let token = await Token.findOne({where: {user_id: userId}})

        if(!token) throw new Error('User not found');

        res.json(token);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const create_uToken = async (value, userId) => {
    try {
        const token = create_token(value);
        const userToken = await Token.create({token, user_id: userId});
        return userToken
    } catch (error) {
        console.log('Token repeated.', error);
        return await create_uToken(value);
    }
}