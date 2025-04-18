import express from 'express';
import * as serviceController from '../controllers/service.controller';

const router = express.Router();

router.get('/status', serviceController.getPendingOrOverdueServices);
router.post('/', serviceController.createService);
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);
router.put('/:id/complete', serviceController.completeService);
router.delete('/:id', serviceController.deleteService);

export default router;
