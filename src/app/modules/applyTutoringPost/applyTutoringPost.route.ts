import express from 'express';
import { ApplyTutoringController } from './applyTutoringPost.controller';

const router = express.Router();

router.post('/apply', ApplyTutoringController.applyTutoringPost);
// router.get('/', ApplyTutorPostController.getAllApplyNeedTutionPost);
router.patch('/:id', ApplyTutoringController.setStudentSelected);
// router.get('/:id', ApplyTutorPostController.getSingleApplyNeedTutionPost);
router.get('/tutoring-apply/:id', ApplyTutoringController.getTutorTutoringApply);

// router.get(
//   '/get-student-enroll-course/:id',
//   ApplyTutorPostController.getStudentEnrollCourse,
// );




export const applyTutoringRoutes = router;
