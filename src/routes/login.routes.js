import { Router } from 'express';
import { getLoginValidator } from '../validations/login.validation';
import { loginUserController } from '../controllers/login';
const router = Router();
router.post('/', getLoginValidator, loginUserController);

export default router;
