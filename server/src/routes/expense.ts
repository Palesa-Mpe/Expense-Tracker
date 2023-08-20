import express from "express";
import { ExpenseController } from "../controllers/expenseController";

export const expenseRoutes = express.Router();

expenseRoutes.get('/', ExpenseController.getAllExpenses);
expenseRoutes.get('/user/:id', ExpenseController.getAllUserExpenses);
expenseRoutes.get('/user/:id/average', ExpenseController.getAvgAmount);
expenseRoutes.get('/user/:id/sum', ExpenseController.getSumAmount);
expenseRoutes.get('/user/:id/category/:categoryid', ExpenseController.getAllUserExpensesByCategory);
expenseRoutes.get('/user/:id/category/:categoryid/average', ExpenseController.getAvgAmountByCategory);
expenseRoutes.get('/user/:id/category/:categoryid/sum', ExpenseController.getSumAmountByCategory);
expenseRoutes.get('/:id', ExpenseController.getExpenseById);
expenseRoutes.post('/', ExpenseController.createExpense);
expenseRoutes.put('/:id', ExpenseController.updateExpense);
expenseRoutes.delete('/:id', ExpenseController.deleteExpense);