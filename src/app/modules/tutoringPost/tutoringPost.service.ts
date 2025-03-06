import mongoose from 'mongoose';
import { ITutoringPost } from './tutoringPost.interface';
import { TutoringPost } from './tutoringPost.model';

const addTutoringPostIntoDB = async (payload: ITutoringPost) => {
  const result = await TutoringPost.create(payload);
  return result;
};

const getAllTutoringPostFromDB = async () => {
  const result = await TutoringPost.find({ isDeleted: false }).populate(
    'tutorId',
  );
  return result;
};
const getOneTutoringPostFromDB = async (id: string) => {
  const result = await TutoringPost.findById(id).populate('tutorId');
  return result;
};

const singleTutorTutoringPostFromDB = async (id: string) => {
  const result = await TutoringPost.find({
    tutorId: new mongoose.Types.ObjectId(id),
  });
  return result;
};

// const deleteTutorNeedPostFromDB = async (id: string) => {
//   const result = await NeedTutor.findByIdAndDelete(id);
//   return result;
// };

export const TutoringPostService = {
  addTutoringPostIntoDB,
  getAllTutoringPostFromDB,
  getOneTutoringPostFromDB,
  singleTutorTutoringPostFromDB,
};
