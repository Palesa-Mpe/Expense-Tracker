import express from "express";
import {ExpenseController} from '../controllers/expenseController'; 
export const expenseRoutes = express.Router();

expenseRoutes.post('/', ExpenseController.getAllUsers);
