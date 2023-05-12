import { Router } from "express";
import { getParkingLots, getParkingLotsWithCity, getParkingLotsWithCityAndFaculty, createParkingLot, getParkingCapacityAndAmount } from '../controllers/parking.lot.controller.js';

const router = Router();

router.get('/', getParkingLots);
router.get('/city/:city', getParkingLotsWithCity);
router.get('/city/:city/faculty/:faculty', getParkingLotsWithCityAndFaculty);
router.post('/', createParkingLot);
router.get('/status/:parkingId', getParkingCapacityAndAmount);

export default router;