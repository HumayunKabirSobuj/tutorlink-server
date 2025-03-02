import { TutorInfo } from './tutorInfo.interface';
import { tutorInfoModel } from './tutorInfo.model';

// const updateTurorInfoIntoDB = async (payload: Partial<TutorInfo>) => {
//     const data = payload
//     console.log(data);
//   const result = await tutorInfoModel.findOneAndUpdate();
// //   return result;
// };

const updateTurorInfoIntoDB = async (payload: TutorInfo) => {
  const { email } = payload.tutorInfo || {}; // Destructure email from tutorInfo

  try {
    const result = await tutorInfoModel.findOneAndUpdate(
      { 'tutorInfo.email': email }, // Match the email
      {
        $set: payload, // Set the new values from payload
      },
      {
        new: true, // Return the updated document
        upsert: true, // If not found, insert a new document
      },
    );

    return result;
  } catch (error) {
    console.error('Error updating or inserting tutor info:', error);
  }
};

export const TutorInfoService = {
  updateTurorInfoIntoDB,
};
