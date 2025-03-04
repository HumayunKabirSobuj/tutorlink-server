import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NeedTutorService } from './needTutor.service';

const addNeedTutor = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await NeedTutorService.addNeedTutorPostIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Need Tutor Post Added successfully',
    data: result,
  });
});
const getAllNeedTutorInfo = catchAsync(async (req, res) => {
 const result = await NeedTutorService.getAllNeedTutorPostFromDB()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Need Tutor Post  retrived successfully',
      data: result,
  });
});
const getOneNeedTutorInfo = catchAsync(async (req, res) => {
 const result = await NeedTutorService.getOneNeedTutorPostFromDB(req.params.id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Need Tutor Post retrived successfully',
      data: result,
  });
});

export const needTutorController = {
  addNeedTutor,
  getAllNeedTutorInfo,
  getOneNeedTutorInfo
};
