"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
exports.UserController = {
    async getAllUsers(req, res) {
        const result = await UserRepository_1.UserRepository.getAllUsers();
        if (result) {
            res.status(200).json(result.rows);
        }
    },
    async getUserById(req, res) {
        const id = req.params.id;
        const result = await UserRepository_1.UserRepository.getUserById(id);
        if ((result === null || result === void 0 ? void 0 : result.rowLength) != null && result.rowLength > 0) {
            res.status(200).json({ success: true, user: result.rows });
        }
        else {
            res.status(404).json({ success: false, message: "User not found", user: null });
        }
    },
    async createUser(req, res) {
        const result = await UserRepository_1.UserRepository.createUser(req.body);
        res.json(result);
        // if (result) {
        //   res.status(201).json({success: true});
        // } else {
        //   res.status(400).json({success: false, message:"Error"});
        // }
    },
    async updateUser(req, res) {
        const id = req.params.id;
        const updatedUser = req.body;
        const checkExist = await UserRepository_1.UserRepository.getUserById(id);
        if ((checkExist === null || checkExist === void 0 ? void 0 : checkExist.rowLength) != null && checkExist.rowLength > 0) {
            const result = await UserRepository_1.UserRepository.updateUser(id, updatedUser);
            if (result) {
                res.status(200).json({ success: true });
            }
            else {
                res.status(404).json({ success: false, message: "Error" });
            }
        }
        else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    },
    async deleteUser(req, res) {
        const id = req.params.id;
        const checkExist = await UserRepository_1.UserRepository.getUserById(id);
        if ((checkExist === null || checkExist === void 0 ? void 0 : checkExist.rowLength) != null && checkExist.rowLength > 0) {
            const result = await UserRepository_1.UserRepository.deleteUser(id);
            if (result) {
                res.status(200).json({ success: true });
            }
            else {
                res.status(404).json({ success: false, message: "Error" });
            }
        }
        else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    },
};
