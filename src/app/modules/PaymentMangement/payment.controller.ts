import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { paymentService } from './payment.service';

const paymentSuccess = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  // console.log('Transaction ID:', tranId);
  await paymentService.paymentSuccessfullIntoDB(productId);

  res.redirect(`https://tutorlink-online.vercel.app/payment-successful/${req.params.productId}`);
});
const paymentFailed = catchAsync(async (req, res) => {
  res.redirect(`https://tutorlink-online.vercel.app/payment-failed/${req.params.productId}`);
});

const getAdminOrderData = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await paymentService.getAdminOrderDataFromDB(req.body.email);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order Data retrived successfully',
    data: result,
  });
});
const getUserOrderData = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await paymentService.getUserOrderDataFromDB(req.body.email);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order Data retrived successfully',
    data: result,
  });
});

const acceptOrder = catchAsync(async (req, res) => {
  // console.log(req.body.id);
  // console.log(req.body);
  const result = await paymentService.acceptOrderIntoDB(req.body.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order accepted successfully',
    data: result,
  });
});
const cencelOrder = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await paymentService.cencelOrderIntoDB(req.body.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order cenceled successfully',
    data: result,
  });
});
const DeleteOrder = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await paymentService.deleteOrderFromDB(req.body.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order deleted successfully',
    data: result,
  });
});

export const paymentController = {
  paymentSuccess,
  paymentFailed,
  getAdminOrderData,
  getUserOrderData,
  acceptOrder,
  cencelOrder,
  DeleteOrder
};
