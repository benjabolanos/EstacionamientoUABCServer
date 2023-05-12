import { Router } from "express";
import { getUsers, getUserByNumberIdOrEmail, createUser, setUserParkingLot, getUserToken } from '../controllers/users.controller.js'

const router = Router();

router.get('/', getUsers);
router.get('/:query', getUserByNumberIdOrEmail);
router.post('/', createUser);
router.get('/:token/parking/:parkingId', setUserParkingLot);
router.get('/:userId/token', getUserToken);

export default router;