import express from 'express';
import { needTutorController } from './needTutor.controller';

const router = express.Router();

router.post('/add-need-tutor', needTutorController.addNeedTutor);
router.get('/:id', needTutorController.getOneNeedTutorInfo);
router.get('/', needTutorController.getAllNeedTutorInfo);

export const needTutorRoutes = router;
