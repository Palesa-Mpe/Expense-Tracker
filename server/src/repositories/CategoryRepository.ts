import { Category } from "../models/Category";
import { cassandraDatabase } from "../database/db";
import { v4 as uuidv4 } from 'uuid';

import { getAllCategories, getCategoryById, getCategoryByName, createCategory, updateCategory, deleteCategory } from "../database/queries/categories";
import { UUID } from "crypto";

export const CategoryRepository = {
    async getAllCategories() {
        const result = await cassandraDatabase.execute(getAllCategories);
        
        return result;
    },

    async getCategoryById(id: string) {
        const result = await cassandraDatabase.execute(getCategoryById, [id]);
        
        return result;
    },

    async getCategoryByName(name: string){
        const result = await cassandraDatabase.execute(getCategoryByName, [name]);
        
        return result;
    },

    async createCategory(newCategory: Category) {
        const id = uuidv4();
        
        const result = await cassandraDatabase.execute(createCategory, [id, newCategory.name]);
        
        return result;
    },

    async updateCategory(id: any, updatedCategory: Category) {
        const result = await cassandraDatabase.execute(updateCategory, [updatedCategory.name, id]);
        
        return result;
    },

    async deleteCategory(id: string) {
        const result = await cassandraDatabase.execute(deleteCategory, [id]);
        
        return result;
    },
};