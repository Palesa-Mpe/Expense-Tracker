export const getAllExpenses: string = 'SELECT * FROM expenses';

export const getAllUserExpenses: string = 'SELECT * FROM expenses WHERE userid = ?';

export const getAllUserExpensesByCategory: string = 'SELECT * FROM expenses WHERE userid = ? AND categoryid = ?';

export const getExpenseById: string = 'SELECT * FROM expenses WHERE expenseid = ?';

export const createExpense: string = 'INSERT INTO expenses (expenseid, amount, categoryid, date, description, name, userid) values (?, ?, ?, ?, ?, ?, ?)';

export const updateExpense: string = 'UPDATE expenses SET amount = ?, categoryid = ?, description = ?, name = ? WHERE expenseid = ?';

export const deleteExpense: string = 'DELETE FROM expenses WHERE expenseid = ?';

export const getAvgAmountByCategory: string = 'SELECT AVG(amount) FROM expenses WHERE userid = ? AND categoryid = ?';

export const getSumAmountByCategory: string = 'SELECT SUM(amount) FROM expenses WHERE userid = ? AND categoryid = ?';

export const getAvgAmount: string = 'SELECT categoryid, AVG(amount) FROM expenses WHERE userid = ? GROUP BY categoryid';

export const getSumAmount: string = 'SELECT categoryid, SUM(amount) FROM expenses WHERE userid = ? GROUP BY categoryid';

