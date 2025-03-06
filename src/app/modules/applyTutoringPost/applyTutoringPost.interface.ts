import { Types } from 'mongoose';

export type TApplyTutoringPost = {
  studentId: Types.ObjectId;
  tutionId: Types.ObjectId;
  tutorId: Types.ObjectId;
  selectStatus?: string;
  paymentStatus?: string;
};
