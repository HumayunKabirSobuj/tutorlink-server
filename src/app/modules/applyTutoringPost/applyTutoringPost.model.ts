import { model, Schema } from 'mongoose';
import { TApplyTutoringPost } from './applyTutoringPost.interface';

const ApplyTutoringPostSchema = new Schema<TApplyTutoringPost>({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  tutionId: {
    type: Schema.Types.ObjectId,
    ref: 'TutoringPost',
    required: true,
  },
  tutorId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  selectStatus: {
    type: String,
    required: false,
    default: 'Not_Selected',
  },
  paymentStatus: {
    type: String,
    required: false,
    default: 'Not_Pay',
  },
});

export const ApplyTutoringPost = model(
  'ApplyTutoringPost',
  ApplyTutoringPostSchema,
);
