import { Router } from 'express';
import userController from '../controllers/userController';
import validate from '../middlewares/validate'
const router: Router =  Router();

router.post('/register', userController.register);
router.get('/list',validate.auth, userController.findAll)
router.get('/',validate.auth,userController.findByDocument)
router.put('/',validate.auth,userController.updateUser)

export default router;
