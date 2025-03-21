import mongoose from 'mongoose';
import { TNeedTutor } from './needTutor.interface';
import NeedTutor from './needTutor.model';

const addNeedTutorPostIntoDB = async (payload: TNeedTutor) => {
  const result = await NeedTutor.create(payload);
  return result;
};

const getAllNeedTutorPostFromDB = async () => {
  const result = await NeedTutor.find().populate('studentId');
  return result;
};
const getOneNeedTutorPostFromDB = async (id: string) => {
  const result = await NeedTutor.findById(id).populate('studentId');
  return result;
};
// const singleStudentNeedTutorPostFromDB = async (id: string) => {
//   const result = await NeedTutor.findOne({ studentId: ObjectId(id) });
//   return result;
// };

const singleStudentNeedTutorPostFromDB = async (id: string) => {
  const result = await NeedTutor.find({
    studentId: new mongoose.Types.ObjectId(id),
  });
  return result;
};

const deleteTutorNeedPostFromDB = async (id: string) => {
  const result = await NeedTutor.findByIdAndDelete(id);
  return result;
};

export const NeedTutorService = {
  addNeedTutorPostIntoDB,
  //   getAllTutorInfomationFromDB
  getAllNeedTutorPostFromDB,
  getOneNeedTutorPostFromDB,
  singleStudentNeedTutorPostFromDB,
  deleteTutorNeedPostFromDB,
};
