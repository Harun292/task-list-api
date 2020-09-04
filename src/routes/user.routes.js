import { Router } from 'express';
import { createUserValidator } from '../validations/user.validation';
import { createUserController } from '../controllers/users';
const router = Router();
router.post('/', createUserValidator, createUserController);

export default router;
