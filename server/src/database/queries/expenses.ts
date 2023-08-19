export const getAllExpenses: string = 'SELECT * FROM expenses';

export const getExpenseById: string = 'SELECT * FROM expenses WHERE expenseid = ?';

export const createExpense: string = 'INSERT INTO expenses (expenseid, amount, categoryid, date, description, name, userid) values (?, ?, ?, ?, ?, ?, ?)';

export const updateExpense: string = 'UPDATE expenses SET amount = ?, categoryid = ?, description = ?, name = ? WHERE expenseid = ?';

export const deleteExpense: string = 'DELETE FROM expenses WHERE expenseid = ?';