import { Router } from 'express';
import userRoutes from './user.routes';
import loginRoutes from './login.routes';
import expenseRoutes from './expense.routes';

const router = Router();

// Test
router.get('/test', () => {
  console.log('test');
});

// User routes
router.use('/users', userRoutes);

router.use('/login', loginRoutes);

// Expense routes
router.use('/expenses', expenseRoutes);

//api v1 main router
export default router.use('/api/v1', router);
