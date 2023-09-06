export const getAllExpenses: string = 'SELECT * FROM expense_tracker.expenses';

export const getAllUserExpenses: string = 'SELECT * FROM expense_tracker.expenses WHERE userid = ? ALLOW FILTERING';

export const getAllUserExpensesByCategory: string = 'SELECT * FROM expense_tracker.expenses WHERE userid = ? AND categoryid = ? ALLOW FILTERING';

export const getExpenseById: string = 'SELECT * FROM expense_tracker.expenses WHERE expenseid = ?';

export const createExpense: string = 'INSERT INTO expense_tracker.expenses (expenseid, amount, categoryid, date, description, name, userid) values (?, ?, ?, ?, ?, ?, ?) IF NOT EXISTS';

export const updateExpense: string = 'UPDATE expense_tracker.expenses SET amount = ?, categoryid = ?, description = ?, name = ? WHERE expenseid = ? IF EXISTS';

export const deleteExpense: string = 'DELETE FROM expense_tracker.expenses WHERE expenseid = ?';

export const getUserAmountByCategory: string = 'SELECT categoryid, amount FROM expense_tracker.expenses WHERE userid = ? AND categoryid = ? ALLOW FILTERING';

export const getUserAmount: string = 'SELECT categoryid, amount FROM expense_tracker.expenses WHERE userid = ? ALLOW FILTERING';
