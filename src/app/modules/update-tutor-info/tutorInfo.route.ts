import express from 'express';
import { TutorInfoController } from './tutorInfo.controller';

const router = express.Router();

router.patch('/update-tutor-info', TutorInfoController.updateTutorInfo);

export const TutorInfoRoutes = router;
