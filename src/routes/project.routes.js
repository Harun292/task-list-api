import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import { addProjectController, deleteProjectController, editProjectController, } from '../controllers/tasks';

const router = Router();
router.use(authenticate);
router.post('/', addProjectController);
router.delete('/:id', deleteProjectController);
router.patch('/:id', editProjectController);

export default router;
