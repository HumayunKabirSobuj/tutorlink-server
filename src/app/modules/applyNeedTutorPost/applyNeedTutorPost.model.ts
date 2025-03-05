import { model, Schema } from 'mongoose';
import { TApplyNeedTutorPost } from './applyNeedTutorPost.interface';

const ApplyNeedTutorPostSchema = new Schema<TApplyNeedTutorPost>({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  tutionId: {
    type: Schema.Types.ObjectId,
    ref: 'NeedTutor',
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
    default:"Not_Selected"
  },
});

export const ApplyNeedTutorPost = model(
  'ApplyNeedTutorPost',
  ApplyNeedTutorPostSchema,
);
