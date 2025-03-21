import express from 'express';
import { paymentController } from './payment.controller';

const router = express.Router();

router.post('/success/:productId', paymentController.paymentSuccess);
router.post('/failed/:productId', paymentController.paymentFailed);
router.put('/get-admin-order-data', paymentController.getAdminOrderData);
router.put('/get-user-order-data', paymentController.getUserOrderData);
router.put('/accept-order', paymentController.acceptOrder);
router.put('/cencel-order', paymentController.cencelOrder);
router.put('/delete-order', paymentController.DeleteOrder);
export const paymentRoutes = router;
