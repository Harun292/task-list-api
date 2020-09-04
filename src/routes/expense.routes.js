import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import {
  getExpensesController,
  addExpenseController,
  deleteExpenseController,
  editExpenseController,
} from '../controllers/expenses';
import {
  getExpenseValidator,
  editExpenseValidator,
} from '../validations/expense.validation';

const router = Router();
router.use(authenticate);
router.get('/', getExpensesController);
router.post('/', getExpenseValidator, addExpenseController);
router.delete('/:id', deleteExpenseController);
router.patch('/:id', editExpenseValidator, editExpenseController);

export default router;
