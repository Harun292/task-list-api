import { Router } from 'express';
import userRoutes from './user.routes';
import loginRoutes from './login.routes';
import projectRoutes from './project.routes';
import listRoutes from './list.routes';
import taskRoutes from './task.routes';
const router = Router();

// Test
router.get('/test', () => {
  console.log('test');
});

// User routes
router.use('/users', userRoutes);

router.use('/login', loginRoutes);

// Project routes
router.use('/project', projectRoutes);
// List routes
router.use('/list', listRoutes);
// Task routes
router.use('/task', taskRoutes);


//api v1 main router
export default router.use('/api/v1', router);
