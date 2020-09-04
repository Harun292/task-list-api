import {
  getExpensesByUserId,
  addExpense,
  deleteExpense,
  editExpense,
} from '../services/db/expenses';
import { HttpError } from '../utils/httpError';

export const getExpensesController = async (req, res, next) => {
  try {
    const id = req.id;
    const expenses = await getExpensesByUserId(id);
    res.status(200).send({ expenses: expenses });
  } catch (error) {
    next(error);
  }
};

export const addExpenseController = async (req, res, next) => {
  try {
    const addedExpense = await addExpense(
      req.id,
      req.body.name,
      req.body.categoryId,
      req.body.description,
      req.body.amount
    );
    res.status(201).send({
      message: 'Expense ' + addedExpense.name + ' successfully added',
      expense: addedExpense,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteExpenseController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const numDeleted = await deleteExpense(id);
    if (numDeleted != 1)
      throw new HttpError(422, 'Error while trying to delete expense');
    res.status(200).send('Expense successfully deleted');
  } catch (error) {
    next(error);
  }
};

export const editExpenseController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const editedExpense = await editExpense(id, req.body.expense);
    if (!editedExpense)
      throw new HttpError(422, 'Error while trying to update expense');
    res.status(200).send({
      expense: editedExpense,
    });
  } catch (error) {
    next(error);
  }
};
