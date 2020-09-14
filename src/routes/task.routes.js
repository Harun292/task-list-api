import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import { addTaskController, deleteTaskController, editTaskController,getAllTasksController } from '../controllers/tasks';

const router = Router();
router.use(authenticate);
router.get('/', getAllTasksController);
router.post('/', addTaskController);
router.delete('/:id', deleteTaskController);
router.patch('/:id', editTaskController);

export default router;