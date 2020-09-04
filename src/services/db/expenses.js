import Expense from '../../models/Expense';

export const getExpensesByUserId = async id => {
  const expenses = await Expense.query()
    .withGraphJoined('category')
    .where({ user_id: id });
  return expenses;
};

export const addExpense = async (id, name, categoryId, description, amount) => {
  const expense = await Expense.query().insert({
    name: name,
    user_id: id,
    category_id: categoryId,
    description: description,
    amount: amount,
  });

  return expense;
};

export const deleteExpense = async id => {
  const numDeleted = await Expense.query().deleteById(id);
  return numDeleted;
};

export const editExpense = async (id, fieldsForEdit) => {
  const updatedExpense = await Expense.query().patchAndFetchById(id, {
    name: fieldsForEdit.name,
    amount: fieldsForEdit.amount,
    category_id: fieldsForEdit.category_id,
    description: fieldsForEdit.description,
  });
  return updatedExpense;
};
