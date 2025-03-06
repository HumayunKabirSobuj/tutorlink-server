import { Schema, model } from 'mongoose';
import { ITutoringPost } from './tutoringPost.interface';

const TutoringPostSchema = new Schema<ITutoringPost>({
  tutorId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  area: { type: String, required: true },
  class: { type: String, required: true },
  daysPerWeek: { type: String, required: true },
  district: { type: String, required: true },
  heading: { type: String, required: true, trim: true },
  medium: { type: String, required: true },
  numberOfStudent: { type: String, required: true },
  salaryRange: { type: String, required: true },
  studentGender: { type: String, required: true },
  subject: { type: String, required: true },
  tutoringTime: { type: String, required: true },
  tutoringType: { type: String, required: true },
  selectedStatus: {
    type: String,
    required: false,
    default: 'Not_Selected',
  },
  paidStatus: {
    type: String,
    required: false,
    default: 'Not_Pay',
  },
  isDeleted: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export const TutoringPost = model('TutoringPost', TutoringPostSchema);
