import { Router } from 'express';
import { createUserValidator } from '../validations/user.validation';
import { createUserController,updateUserController } from '../controllers/users';
import { authenticate } from '../middlewares/authenticate';
const router = Router();
router.post('/', createUserValidator, createUserController);
router.patch('/', authenticate,updateUserController);
export default router;
