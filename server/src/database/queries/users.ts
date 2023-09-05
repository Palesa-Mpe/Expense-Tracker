export const getAllUsers: string = 'SELECT * FROM  expense_tracker.users';

export const getUserById: string = 'SELECT * FROM  expense_tracker.users WHERE userid = ?';

export const createUser: string = 'INSERT INTO  expense_tracker.users (userid, email, username) values (?, ?, ?)';

export const updateUser: string = 'UPDATE  expense_tracker.users SET email = ?, username = ? WHERE userid = ?';

export const deleteUser: string = 'DELETE FROM  expense_tracker.users WHERE userid = ?';