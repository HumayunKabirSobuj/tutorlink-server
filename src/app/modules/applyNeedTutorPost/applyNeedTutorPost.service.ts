import mongoose from 'mongoose';
import { ApplyNeedTutorPost } from './applyNeedTutorPost.model';
import { TApplyNeedTutorPost } from './applyNeedTutorPost.interface';

const ApplyNeedTutorPostIntoDB = async (payload: TApplyNeedTutorPost) => {
  const result = await ApplyNeedTutorPost.create(payload);
  return result;
};

const getAllApplyNeedTutorPostFromDB = async () => {
  const result = await ApplyNeedTutorPost.find()
    .populate('studentId')
    .populate('tutorId')
    .populate('tutionId');
  return result;
};
const getSingleApplyNeedTutorPostFromDB = async (id: string) => {
  // console.log(id);
  const result = await ApplyNeedTutorPost.find({
    tutionId: new mongoose.Types.ObjectId(id),
  })
    .populate('studentId')
    .populate('tutorId')
    .populate('tutionId');
  return result;
};

const setSelectedTutorIntoDB = async (id: string,payload:Record<string, unknown>) => {
  // console.log("service",id);
//  console.log(id,payload);
  const result = await ApplyNeedTutorPost.findByIdAndUpdate(id, payload);
  return result;
};


const getTutorApplyPostForNeedTutorPostFromDB = async (id: string) => {
  // console.log(id);
  const result = await ApplyNeedTutorPost.find({
    tutorId: new mongoose.Types.ObjectId(id),
  })
    .populate('studentId')
    .populate('tutorId')
    .populate('tutionId');
  return result;
};




export const ApplyNeedTutorPostService = {
  ApplyNeedTutorPostIntoDB,
  getAllApplyNeedTutorPostFromDB,
  getSingleApplyNeedTutorPostFromDB,
  setSelectedTutorIntoDB,
  getTutorApplyPostForNeedTutorPostFromDB
 
};
