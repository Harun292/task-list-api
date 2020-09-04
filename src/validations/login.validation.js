import { body } from 'express-validator';

import { validateResult } from './validateResult';

export const getLoginValidator = [
  body('email').exists().isEmail(),
  body('password').isLength({ min: 6 }).exists().isLength({ max: 39 }),
  validateResult,
];
