import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { TutorInfoRoutes } from '../modules/update-tutor-info/tutorInfo.route';
import { needTutorRoutes } from '../modules/needTutor/needTutor.route';
import { applyNeedTutorRoutes } from '../modules/applyNeedTutorPost/applyNeedTutorPost.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/tutor',
    route: TutorInfoRoutes,
  },
  {
    path: '/need-tutor',
    route: needTutorRoutes,
  },
  {
    path: '/apply-need-tutor',
    route: applyNeedTutorRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
