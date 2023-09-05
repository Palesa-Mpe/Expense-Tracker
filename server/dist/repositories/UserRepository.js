"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const db_1 = require("../database/db");
const users_1 = require("../database/queries/users");
exports.UserRepository = {
    async getAllUsers() {
        const result = await db_1.cassandraDatabase.execute(users_1.getAllUsers);
        return result;
    },
    async getUserById(id) {
        const result = await db_1.cassandraDatabase.execute(users_1.getUserById, [id]);
        return result;
    },
    async createUser(newUser) {
        const result = await db_1.cassandraDatabase.execute(users_1.createUser, [newUser.userid, newUser.email, newUser.username]);
        return result;
    },
    async updateUser(id, updatedUser) {
        const result = await db_1.cassandraDatabase.execute(users_1.updateUser, [updatedUser.email, updatedUser.username, id]);
        return result;
    },
    async deleteUser(id) {
        const result = await db_1.cassandraDatabase.execute(users_1.deleteUser, [id]);
        return result;
    },
};
