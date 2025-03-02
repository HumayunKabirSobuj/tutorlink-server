import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TutorInfoService } from './tutorInfo.service';

const updateTutorInfo = catchAsync(async (req, res) => {
  const result = await TutorInfoService.updateTurorInfoIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Infomation Updated successfully',
      data: result,
  });
});
const getAllTutorInfo = catchAsync(async (req, res) => {
  const result = await TutorInfoService.getAllTutorInfomationFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor infomation retrived successfully',
      data: result,
  });
});




export const TutorInfoController = {
  updateTutorInfo,
  getAllTutorInfo
};
