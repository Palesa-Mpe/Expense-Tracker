import { Request, Response } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";

export const categoryController = {
    async getAllCategories(req: Request, res: Response) {
        const result = await CategoryRepository.getAllCategories();
        res.status(200).json(result);
    },

    async getCategoryById(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        const result = await CategoryRepository.getCategoryById(id);

        if (result) {
            res.status(200).json({success: true, category: result});
        } else {
            res.status(404).json({success: false, message:"Category not found", category: result});
        }
    },

    async createCategory(req: Request, res: Response) {
        const result = await CategoryRepository.createCategory(req.body);
        if (result) {
            res.status(201).json({success: true});
        } else {
            res.status(400).json({success: false, message:"Error", category: result});
        }
    },

    async updateCategory(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        const updatedCategory = req.body;
        const result = await CategoryRepository.updateCategory(id, updatedCategory);
        if (result) {
            res.status(204).json({success: true});
        } else {
            res.status(404).json({success: false, message:"Category not found"});
        }
    },

    async deleteCategory(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        const result = await CategoryRepository.deleteCategory(id);
        if (result) {
            res.status(200).json({success: true});
        } else {
            res.status(404).json({success: false, message:"Category not found"});
        }
    },
};