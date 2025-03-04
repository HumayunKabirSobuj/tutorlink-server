import express from 'express';
import { needTutorController } from './needTutor.controller';

const router = express.Router();

router.post('/add-need-tutor', needTutorController.addNeedTutor);
router.get('/:id', needTutorController.getOneNeedTutorInfo);
router.get('/', needTutorController.getAllNeedTutorInfo);
router.get(
  '/my-need-tutor-post/:id',
  needTutorController.singleStudentNeedTutorInfo,
);

router.delete(
  '/delete-need-tutor-post',
  needTutorController.deleteNeedTutorPost,
);

export const needTutorRoutes = router;
