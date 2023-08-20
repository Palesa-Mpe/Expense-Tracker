"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
exports.UserController = {
    async getAllUsers(req, res) {
        const result = await UserRepository_1.UserRepository.getAllUsers();
        res.status(200).json(result);
    },
    async getUserById(req, res) {
        const id = req.params.id;
        const result = await UserRepository_1.UserRepository.getUserById(id);
        if (result) {
            res.status(200).json({ success: true, user: result });
        }
        else {
            res.status(404).json({ success: false, message: "User not found", user: result });
        }
    },
    async createUser(req, res) {
        const result = await UserRepository_1.UserRepository.createUser(req.body);
        if (result) {
            res.status(201).json({ success: true });
        }
        else {
            res.status(400).json({ success: false, message: "Error" });
        }
    },
    async updateUser(req, res) {
        const id = req.params.id;
        const updatedUser = req.body;
        const result = await UserRepository_1.UserRepository.updateUser(id, req.body);
        if (result) {
            res.status(204).json({ success: true });
        }
        else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    },
    async deleteUser(req, res) {
        const id = req.params.id;
        const result = await UserRepository_1.UserRepository.deleteUser(id);
        if (result) {
            res.status(200).json({ success: true });
        }
        else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    },
};
