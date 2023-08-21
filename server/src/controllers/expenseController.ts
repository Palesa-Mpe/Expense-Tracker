import { Request, Response } from "express";
import { ExpenseRepository } from "../repositories/ExpenseRepository";

export const ExpenseController = {
    async getAllExpenses(req: Request, res: Response) {
        const result = await ExpenseRepository.getAllExpenses();
        res.json(result);
    },

    async getExpenseById(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        
        const result = await ExpenseRepository.getExpenseById(id);
        res.json(result);
    },

    async createExpense(req: Request, res: Response) {
        const result = await ExpenseRepository.createExpense(req.body);
        res.status(201).json(result);
    },

    async updateExpense(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        const updatedExpense = req.body;
        const result = await ExpenseRepository.updateExpense(id, updatedExpense);
        res.json(result);
    },

    async deleteExpense(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        const result = await ExpenseRepository.deleteExpense(id);
        res.json(result);
    },
};