"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
exports.UserController = {
    async getAllUsers(req, res) {
        const result = await UserRepository_1.UserRepository.getAllUsers();
        res.json(result);
    },
    async getUserById(req, res) {
        const id = req.params.id;
        const result = await UserRepository_1.UserRepository.getUserById(id);
        res.json(result);
    },
    async createUser(req, res) {
        const result = await UserRepository_1.UserRepository.createUser(req.body);
        res.status(201).json(result);
    },
    async updateUser(req, res) {
        const id = req.params.id;
        const updatedUser = req.body;
        const result = await UserRepository_1.UserRepository.updateUser(id, req.body);
        res.json(result);
    },
    async deleteUser(req, res) {
        const id = req.params.id;
        const result = await UserRepository_1.UserRepository.deleteUser(id);
        res.json(result);
    },
};
