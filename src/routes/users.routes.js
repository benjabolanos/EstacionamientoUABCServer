import { Router } from "express";
import { getUsers, getUserByNumberIdOrEmail, createUser, setUserParkingLot } from '../controllers/users.controller.js'

const router = Router();

router.get('/', getUsers);
router.get('/:query', getUserByNumberIdOrEmail);
router.post('/', createUser);
router.post('/:emai/parking/:parkingId', setUserParkingLot);

export default router;