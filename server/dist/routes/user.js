"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
exports.userRoutes = express_1.default.Router();
exports.userRoutes.get('/verify/', userController_1.UserController.verifyUser);
exports.userRoutes.get('/', userController_1.UserController.getAllUsers);
exports.userRoutes.get('/:id', userController_1.UserController.getUserById);
exports.userRoutes.post('/', userController_1.UserController.createUser);
exports.userRoutes.put('/:id', userController_1.UserController.updateUser);
exports.userRoutes.delete('/:id', userController_1.UserController.deleteUser);
