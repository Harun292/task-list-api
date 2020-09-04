import { param, body } from 'express-validator';

import { validateResult } from './validateResult';

export const getExpenseValidator = [
  body('categoryId').exists(),
  body('name').isLength({ min: 1 }).exists().isLength({ max: 50 }),
  body('description').isLength({ min: 0 }).exists().isLength({ max: 255 }),
  body('amount').isNumeric(),
  validateResult,
];

export const editExpenseValidator = [
  param('id').exists(),
  body('expense').exists(),
  body('expense.categoryId').optional().isNumeric(),
  body('expense.name')
    .optional()
    .isLength({ min: 1 })
    .exists()
    .isLength({ max: 50 }),
  body('expense.description')
    .optional()
    .isLength({ min: 0 })
    .exists()
    .isLength({ max: 255 }),
  body('expense.amount').optional().isNumeric(),
  validateResult,
];
