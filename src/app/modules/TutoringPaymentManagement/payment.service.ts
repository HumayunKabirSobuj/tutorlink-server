import { ApplyTutoringPost } from '../applyTutoringPost/applyTutoringPost.model';
import { TutoringPost } from '../tutoringPost/tutoringPost.model';

const tutoringPaymentSuccessfullIntoDB = async (id: string) => {
  // console.log(id);

  const findPost = await ApplyTutoringPost.findById(id);
  // console.log(findPost);

  await TutoringPost.findByIdAndUpdate({_id:findPost?.tutionId},{paidStatus:"Done"})

  const result = await ApplyTutoringPost.findByIdAndUpdate(id, {
    paymentStatus: 'Done',
  });
  return result;
};

export const paymentService = {
  tutoringPaymentSuccessfullIntoDB,
};
