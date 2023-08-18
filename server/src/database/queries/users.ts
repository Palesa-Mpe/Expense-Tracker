export const getAllUsers: string = 'SELECT * FROM users';

export const getUserById: string = 'SELECT * FROM users WHERE userid = ?';

export const createUser: string = 'INSERT INTO users (email, username) values (?, ?)';

export const updateUser: string = 'UPDTAE users SET email = ?, username = ? WHERE userid = ?';

export const deleteUser: string = 'DELETE FROM users WHERE userid = ?';