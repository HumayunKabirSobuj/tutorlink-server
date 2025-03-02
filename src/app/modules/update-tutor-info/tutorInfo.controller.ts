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

export const TutorInfoController = {
  updateTutorInfo,
};
