import { Category } from "../models/Category";
import { cassandraDatabase } from "../database/db";
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../database/queries/categories";

export const CategoryRepository = {
    async getAllCategories() {
        const result = await cassandraDatabase.execute(getAllCategories);
        console.log(result);
        return result;
    },

    async getCategoryById(id: Number) {
        const result = await cassandraDatabase.execute(getCategoryById, [id]);
        console.log(result);
        return result;
    },

    async createCategory(newCategory: Category) {
        const result = await cassandraDatabase.execute(createCategory, [newCategory.categoryid, newCategory.name]);
        console.log(result);
        return result;
    },

    async updateCategory(id: Number, updatedCategory: Category) {
        const result = await cassandraDatabase.execute(updateCategory, [updatedCategory.name, id]);
        console.log(result);
        return result;
    },

    async deleteCategory(id: Number) {
        const result = await cassandraDatabase.execute(deleteCategory, [id]);
        console.log(result);
        return result;
    },
};