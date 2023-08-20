import { Request, Response } from "express";
import { ExpenseRepository } from "../repositories/ExpenseRepository";

export const ExpenseController = {
    async getAllExpenses(req: Request, res: Response) {
        const result = await ExpenseRepository.getAllExpenses();
        res.status(200).json(result);
    },

    async getAllUserExpenses(req: Request, res: Response) {
        const id: string = req.params.id;
        
        const result = await ExpenseRepository.getAllUserExpenses(id);
        if (result) {
            res.status(200).json({success: true, expense: result});
        } else {
            res.status(404).json({success: false, message:"User and/or Expenses not found", expense: result});
        }
    },

    async getAllUserExpensesByCategory(req: Request, res: Response) {
        const userid: string = req.params.id;
        const categoryid: Number = Number(req.params.categoryid);
        
        const result = await ExpenseRepository.getAllUserExpensesByCategory(userid, categoryid);
        if (result) {
            res.status(200).json({success: true, expense: result});
        } else {
            res.status(404).json({success: false, message:"User and/or Category not found", expense: result});
        }
    },

    async getExpenseById(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        
        const result = await ExpenseRepository.getExpenseById(id);
        if (result) {
            res.status(200).json({success: true, expense: result});
        } else {
            res.status(404).json({success: false, message:"Expense not found", expense: result});
        }
    },

    async createExpense(req: Request, res: Response) {
        const result = await ExpenseRepository.createExpense(req.body);
        res.json(result);
        //console.log('create,',result)
        // if (result) {
        //     res.status(201).json({success: true});
        // } else {
        //     res.status(400).json({success: false, message:"Error"});
        // }
    },

    async updateExpense(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        const updatedExpense = req.body;
        const result = await ExpenseRepository.updateExpense(id, updatedExpense);
        res.json(result);
        // console.log('update,',result)
        // if (result) {
        //     res.status(204).json({success: true});
        // } else {
        //     res.status(404).json({success: false, message:"Expense not found"});
        // }
    },

    async deleteExpense(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        const result = await ExpenseRepository.deleteExpense(id);
        res.json(result);
        // console.log('delete,',result)
        // if (result) {
        //     res.status(200).json({success: true});
        // } else {
        //     res.status(404).json({success: false, message:"Expense not found"});
        // }
    },
    
    async getAvgAmount(req: Request, res: Response) {
        const id: string = req.params.id;

        const result = await ExpenseRepository.getAvgAmount(id);
        if (result) {
            res.status(200).json({success: true, expense: result});
        } else {
            res.status(404).json({success: false, message:"User and/or Expenses not found", expense: result});
        }
    },

    async getSumAmount(req: Request, res: Response) {
        const id: string = req.params.id;
        
        const result = await ExpenseRepository.getSumAmount(id);
        if (result) {
            res.status(200).json({success: true, expense: result});
        } else {
            res.status(404).json({success: false, message:"User and/or Expenses not found", expense: result});
        }
    },

    async getAvgAmountByCategory(req: Request, res: Response) {
        const userid: string = req.params.id;
        const categoryid: Number = Number(req.params.categoryid);
        
        const result = await ExpenseRepository.getAvgAmountByCategory(userid, categoryid);
        if (result) {
            res.status(200).json({success: true, expense: result});
        } else {
            res.status(404).json({success: false, message:"User and/or Category not found", expense: result});
        }
    },
    
    async getSumAmountByCategory(req: Request, res: Response) {
        const userid: string = req.params.id;
        const categoryid: Number = Number(req.params.categoryid);
        
        const result = await ExpenseRepository.getSumAmountByCategory(userid, categoryid);
        if (result) {
            res.status(200).json({success: true, expense: result});
        } else {
            res.status(404).json({success: false, message:"User and/or Category not found", expense: result});
        }
    },
};