"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("./user");
const expense_1 = require("./expense");
const category_1 = require("./category");
exports.router = express_1.default.Router();
exports.router.use('/users', user_1.userRoutes);
exports.router.use('/expenses', expense_1.expenseRoutes);
exports.router.use('/categories', category_1.categoryRoutes);
