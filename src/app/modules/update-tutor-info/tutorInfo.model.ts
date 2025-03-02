import mongoose, { Schema } from 'mongoose';
import { TutorInfo } from './tutorInfo.interface';

const tutorInfoSchema = new Schema({
  tutorInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, },
    image: { type: String, required: true },
    iat: { type: Number, required: true },
    exp: { type: Number, required: true },
  },
  education: {
    graduationCurriculum: { type: String, required: false },
    graduationGroup: { type: String, required: false },
    graduationInstituteType: { type: String, required: false },
    graduationPassingYear: { type: String, required: false },
    graduationResult: { type: String, required: false },
    secondaryCurriculum: { type: String, required: false },
    secondaryGroup: { type: String, required: false },
    secondaryInstitute: { type: String, required: false },
    secondaryPassingYear: { type: String, required: false },
    secondaryResult: { type: String, required: false },
  },
  tuition: {
    tuitionDuration: { type: String, required: false },
    tuitionEndDate: { type: String, required: false },
    tuitionFees: { type: String, required: false },
    tuitionInstitute: { type: String, required: false },
    tuitionLevel: { type: String, required: false },
    tuitionStartDate: { type: String, required: false },
    tuitionSubject: { type: String, required: false },
  },
  personal: {
    address: { type: String, required: false },
    email: { type: String, required: false },
    fatherName: { type: String, required: false },
    fullName: { type: String, required: false },
    mobileNumber: { type: String, required: false },
    motherName: { type: String, required: false },
  },
});
// Model definition
export const tutorInfoModel = mongoose.model<TutorInfo>(
  'TutorInformation',
  tutorInfoSchema,
);
