import { Router } from 'express';
import authRoutes from '../controllers/authController';

const router: Router = Router();

router.post('/', authRoutes.getToken);

export default router;
