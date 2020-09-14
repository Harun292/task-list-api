import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import { addListController, deleteListController,editListController } from '../controllers/lists';

const router = Router();
router.use(authenticate);
router.post('/', addListController);
router.delete('/:id', deleteListController);
router.patch('/:id', editListController);

export default router;