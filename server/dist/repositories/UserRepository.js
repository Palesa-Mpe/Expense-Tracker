"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const users = [
    { userid: 1, username: 'John' },
    { userid: 2, username: 'Jane' },
];
exports.UserRepository = {
    getAllUsers() {
        return users;
    },
    getUserById(id) {
        const user = users.find(user => user.userid === id);
        if (user) {
            return user;
        }
        else {
            return { success: false, message: 'User not found' };
        }
    },
    createUser(newUser) {
        users.push(newUser);
        return { success: true };
    },
    updateUser(userid, updatedUser) {
        const index = users.findIndex(user => user.userid === userid);
        if (index !== -1) {
            users[index] = updatedUser;
            return { success: true };
        }
        else {
            return { success: false, message: 'User not found' };
        }
    },
    deleteUser(id) {
        const index = users.findIndex(user => user.userid == id);
        if (index !== -1) {
            users.splice(index, 1);
            return { success: true };
        }
        else {
            return { success: false, message: 'User not found' };
        }
    },
};
