import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { TutorInfoRoutes } from '../modules/update-tutor-info/tutorInfo.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/tutor',
    route:TutorInfoRoutes
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
