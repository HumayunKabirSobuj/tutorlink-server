import catchAsync from '../../utils/catchAsync';
import { paymentService } from './payment.service';

const tutoringPaymentSuccess = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  // console.log('Transaction ID:', tranId);
  await paymentService.tutoringPaymentSuccessfullIntoDB(productId);

  res.redirect(`http://localhost:3000/payment-successful/${req.params.productId}`);
});
const tutoringPaymentFailed = catchAsync(async (req, res) => {
  res.redirect(`http://localhost:3000/payment-failed/${req.params.productId}`);
});



export const paymentController = {
  tutoringPaymentSuccess,
  tutoringPaymentFailed,

};
