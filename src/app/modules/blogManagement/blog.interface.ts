import { Types } from 'mongoose';

export interface TBlog {
  title: string;
  short_description: string;
  long_description: string;
  image: string;
  tutorId: Types.ObjectId;
}
