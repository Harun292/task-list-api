import { body } from 'express-validator';

import { validateResult } from './validateResult';

export const createUserValidator = [
  body('email').exists().isEmail(),
  body('password').isLength({ min: 6 }).exists().isLength({ max: 39 }),
  body('firstName').isLength({ min: 3 }).exists().isLength({ max: 39 }),
  body('lastName').isLength({ min: 3 }).exists().isLength({ max: 39 }),
  validateResult,
];
