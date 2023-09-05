export const getAllExpenses: string = 'SELECT * FROM expense_tracker.expenses';

export const getAllUserExpenses: string = 'SELECT * FROM expense_tracker.expenses WHERE userid = ?';

export const getAllUserExpensesByCategory: string = 'SELECT * FROM expense_tracker.expenses WHERE userid = ? AND categoryid = ?';

export const getExpenseById: string = 'SELECT * FROM expense_tracker.expenses WHERE expenseid = ?';

export const createExpense: string = 'INSERT INTO expense_tracker.expenses (expenseid, amount, categoryid, date, description, name, userid) values (?, ?, ?, ?, ?, ?, ?) IF NOT EXISTS';

export const updateExpense: string = 'UPDATE expense_tracker.expenses SET amount = ?, categoryid = ?, description = ?, name = ? WHERE expenseid = ? IF EXISTS';

export const deleteExpense: string = 'DELETE FROM expense_tracker.expenses WHERE expenseid = ?';

export const getAvgAmountByCategory: string = 'SELECT AVG(amount) FROM expense_tracker.expenses WHERE userid = ? AND categoryid = ?';

export const getSumAmountByCategory: string = 'SELECT SUM(amount) FROM expense_tracker.expenses WHERE userid = ? AND categoryid = ?';

export const getAvgAmount: string = 'SELECT categoryid, AVG(amount) FROM expense_tracker.expenses WHERE userid = ? GROUP BY categoryid';

export const getSumAmount: string = 'SELECT categoryid, SUM(amount) FROM expense_tracker.expenses WHERE userid = ? GROUP BY categoryid';

