import { Types } from 'mongoose';

export type ITutoringPost = {
  tutorId: Types.ObjectId;
  area: string;
  class: string;
  daysPerWeek: string;
  district: string;
  heading: string;
  medium: string;
  numberOfStudent: string;
  salaryRange: string;
  studentGender: string;
  subject: string;
  tutoringTime: string;
  tutoringType: string;
  selectedStatus?: string;
  paidStatus?: string;
  isDeleted?: boolean;
};
