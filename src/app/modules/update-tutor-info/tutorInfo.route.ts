import express from 'express';
import { TutorInfoController } from './tutorInfo.controller';

const router = express.Router();

router.patch('/update-tutor-info', TutorInfoController.updateTutorInfo);
router.get('/', TutorInfoController.getAllTutorInfo);

export const TutorInfoRoutes = router;
