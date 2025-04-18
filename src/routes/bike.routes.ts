import express from 'express';
import * as bikeController from '../controllers/bike.controller';

const router = express.Router();

router.post('/', bikeController.createBike);
router.get('/', bikeController.getAllBikes);
router.get('/:id', bikeController.getBikeById);
router.put('/:id', bikeController.updateBike);
router.delete('/:id', bikeController.deleteBike);

export default router;