import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import { addTaskController, deleteTaskController, editTaskController } from '../controllers/tasks';

const router = Router();
router.use(authenticate);
router.post('/', addTaskController);
router.delete('/:id', deleteTaskController);
router.patch('/:id', editTaskController);

export default router;