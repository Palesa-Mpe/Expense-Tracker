import { Request, Response } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";

export const categoryController = {
    async getAllCategories(req: Request, res: Response) {
        const result = await CategoryRepository.getAllCategories();
        res.json(result);
    },

    async getCategoryById(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        
        const result = await CategoryRepository.getCategoryById(id);
        res.json(result);
    },

    async createCategory(req: Request, res: Response) {
        const result = await CategoryRepository.createCategory(req.body);
        res.status(201).json(result);
    },

    async updateCategory(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        const updatedCategory = req.body;
        const result = await CategoryRepository.updateCategory(id, updatedCategory);
        res.json(result);
    },

    async deleteCategory(req: Request, res: Response) {
        const id: Number = Number(req.params.id);
        const result = await CategoryRepository.deleteCategory(id);
        res.json(result);
    },
};