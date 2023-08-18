import express from "express";
import { ExpenseController } from "../controllers/expenseController";

export const expenseRoutes = express.Router();

expenseRoutes.get('/', ExpenseController.getAllExpenses);
expenseRoutes.get('/:id', ExpenseController.getExpenseById);
expenseRoutes.post('/', ExpenseController.createExpense);
expenseRoutes.put('/:id', ExpenseController.updateExpense);
expenseRoutes.delete('/:id', ExpenseController.deleteExpense);