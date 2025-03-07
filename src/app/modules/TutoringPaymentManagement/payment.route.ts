import express from 'express';
import { paymentController } from './payment.controller';

const router = express.Router();

router.post('/success/:productId', paymentController.tutoringPaymentSuccess);
router.post('/failed/:productId', paymentController.tutoringPaymentFailed);

export const tutoringPaymentRoutes = router;
