import { Router } from "express";
import { getParkingLots, getParkingLotsWithCity, getParkingLotsWithCityAndFaculty, createParkingLot } from '../controllers/parking.lot.controller.js';

const router = Router();

router.get('/', getParkingLots);
router.get('/city/:city', getParkingLotsWithCity);
router.get('/city/:city/faculty/:faculty', getParkingLotsWithCityAndFaculty);
router.post('/', createParkingLot);

export default router;