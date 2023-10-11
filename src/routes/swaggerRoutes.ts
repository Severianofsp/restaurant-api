import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
const router = Router();

router.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export default router;
