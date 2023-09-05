import { Request, Response } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { v4 as uuidv4, parse } from "uuid";
import { UUID } from "crypto";

export const categoryController = {
    async getAllCategories(req: Request, res: Response) {
        const result = await CategoryRepository.getAllCategories();
        if (result) {
            res.status(200).json(result.rows);
        }
    },

    async getCategoryById(req: Request, res: Response) {
        const id = req.params.id;
        const result = await CategoryRepository.getCategoryById(id);

        if (result) {
            res.status(200).json({success: true, category: result.rows});
        } else {
            res.status(404).json({success: false, message:"Category not found", category: null});
        }
    },

    async getCategoryByName(req: Request, res: Response) {
        const name: string = req.params.name;
        console.log(name);
        const result = await CategoryRepository.getCategoryByName(name);

        if (result) {
            res.status(200).json({success: true, category: result.rows});
        } else {
            res.status(404).json({success: false, message:"Category not found", category: null});
        }
    },

    async createCategory(req: Request, res: Response) {
        const checkDuplicate = await CategoryRepository.getCategoryByName(req.body.name);
        if (checkDuplicate?.rowLength != null && checkDuplicate.rowLength > 0) {
            res.status(400).json({success: false, message:"Category already exists"});
        } else {
            const result = await CategoryRepository.createCategory(req.body);
            if (result) {
                res.status(201).json({success: true});
            } else {
                res.status(400).json({success: false, message:"Error", category: null});
            }
        }

        
    },

    async updateCategory(req: Request, res: Response) {
        const id = req.params.id;
        const updatedCategory = req.body;
        console.log(updatedCategory);
        console.log("BODY");
        console.log(req.body);
        
        
        const result = await CategoryRepository.updateCategory(id, updatedCategory);
        if (result) {
            res.status(204).json({success: true});
        } else {
            res.status(404).json({success: false, message:"Category not found"});
        }
    },

    async deleteCategory(req: Request, res: Response) {
        const id = req.params.id;

        const checkExist = await CategoryRepository.getCategoryById(req.body.id);
        if (checkExist?.rowLength != null && checkExist.rowLength > 0) {
            res.status(404).json({success: false, message:"Category not found"});
        } else {
            const result = await CategoryRepository.deleteCategory(id);
            if (result) {
                res.status(201).json({success: true});
            } else {
                res.status(400).json({success: false, message:"Error", category: null});
            }
        }
    },
};