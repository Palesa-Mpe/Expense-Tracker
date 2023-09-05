import { Request, Response } from "express";
import { ExpenseRepository } from "../repositories/ExpenseRepository";

export const ExpenseController = {
    async getAllExpenses(req: Request, res: Response) {
        const result = await ExpenseRepository.getAllExpenses();
        if (result) {
            res.status(200).json(result.rows);
        }
    },

    async getAllUserExpenses(req: Request, res: Response) {
        const id: string = req.params.id;
        
        const result = await ExpenseRepository.getAllUserExpenses(id);
        if (result?.rowLength != null && result.rowLength > 0) {
            res.status(200).json({success: true, expense: result.rows});
        } else {
            res.status(404).json({success: false, message:"User and/or Expenses not found", expense: null});
        }
    },

    async getAllUserExpensesByCategory(req: Request, res: Response) {
        const userid: string = req.params.id;
        const categoryid: string = req.params.categoryid;
        
        const result = await ExpenseRepository.getAllUserExpensesByCategory(userid, categoryid);
        if (result?.rowLength != null && result.rowLength > 0) {
            res.status(200).json({success: true, expense: result.rows});
        } else {
            res.status(404).json({success: false, message:"User and/or Category not found", expense: null});
        }
    },

    async getExpenseById(req: Request, res: Response) {
        const id: string = req.params.id;
        
        const result = await ExpenseRepository.getExpenseById(id);
        if (result?.rowLength != null && result.rowLength > 0) {
            res.status(200).json({success: true, expense: result.rows});
        } else {
            res.status(404).json({success: false, message:"Expense not found", expense: null});
        }
    },

    async createExpense(req: Request, res: Response) {
        const result = await ExpenseRepository.createExpense(req.body);
        if (result) {
            res.status(201).json({success: true});
        } else {
            res.status(400).json({success: false, message:"Error"});
        }
    },

    async updateExpense(req: Request, res: Response) {
        const id: string = req.params.id;
        const updatedExpense = req.body;

        const checkExist = await ExpenseRepository.getExpenseById(id);
        if (checkExist?.rowLength != null && checkExist.rowLength > 0) {
            const result = await ExpenseRepository.updateExpense(id, updatedExpense);
            if (result) {
                res.status(200).json({success: true});
            } else {
                res.status(400).json({success: false, message:"Error"});
            }
        } else {
            res.status(404).json({success: false, message:"Expense not found"});
        }
    },

    async deleteExpense(req: Request, res: Response) {
        const id: string = req.params.id;
        
        const checkExist = await ExpenseRepository.getExpenseById(id);
        if (checkExist?.rowLength != null && checkExist.rowLength > 0) {
            const result = await ExpenseRepository.deleteExpense(id);
            if (result) {
                res.status(200).json({success: true});
            } else {
                res.status(400).json({success: false, message:"Error", category: null});
            }
        } else {
            res.status(404).json({success: false, message:"Expense not found"});
        }
    },
    
    async getAvgAmount(req: Request, res: Response) {
        const id: string = req.params.id;

        const result = await ExpenseRepository.getAvgAmount(id);
        if (result?.rowLength != null && result.rowLength > 0) {
            res.status(200).json({success: true, expense: result.rows});
        } else {
            res.status(404).json({success: false, message:"User and/or Expenses not found", expense: null});
        }
    },

    async getSumAmount(req: Request, res: Response) {
        const id: string = req.params.id;
        
        const result = await ExpenseRepository.getSumAmount(id);
        if (result?.rowLength != null && result.rowLength > 0) {
            res.status(200).json({success: true, expense: result.rows});
        } else {
            res.status(404).json({success: false, message:"User and/or Expenses not found", expense: null});
        }
    },

    async getAvgAmountByCategory(req: Request, res: Response) {
        const userid: string = req.params.id;
        const categoryid: string = req.params.categoryid;
        
        const result = await ExpenseRepository.getAvgAmountByCategory(userid, categoryid);
        if (result?.rowLength != null && result.rowLength > 0) {
            res.status(200).json({success: true, expense: result.rows});
        } else {
            res.status(404).json({success: false, message:"User and/or Category not found", expense: null});
        }
    },
    
    async getSumAmountByCategory(req: Request, res: Response) {
        const userid: string = req.params.id;
        const categoryid: string = req.params.categoryid;
        
        const result = await ExpenseRepository.getSumAmountByCategory(userid, categoryid);
        if (result?.rowLength != null && result.rowLength > 0) {
            res.status(200).json({success: true, expense: result.rows});
        } else {
            res.status(404).json({success: false, message:"User and/or Category not found", expense: null});
        }
    },
};