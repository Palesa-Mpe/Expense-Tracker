import { Expense } from "../models/Expense";
import { cassandraDatabase } from "../database/db";
import { v4 as uuidv4 } from 'uuid';

import * as Queries from "../database/queries/expenses";

export const ExpenseRepository = {
    async getAllExpenses() {
        const result = await cassandraDatabase.execute(Queries.getAllExpenses);
        
        return result;
    },
    
    async getAllUserExpenses(id: string) {
        const result = await cassandraDatabase.execute(Queries.getAllUserExpenses, [id]);
        
        return result;
    },

    async getAllUserExpensesByCategory(userid: string, categoryid: string) {
        const result = await cassandraDatabase.execute(Queries.getAllUserExpensesByCategory, [userid, categoryid]);
        
        return result;
    },

    async getExpenseById(id: string) {
        const result = await cassandraDatabase.execute(Queries.getExpenseById, [id]);
        
        return result;
    },

    async createExpense(newExpense: Expense) {
        const id = uuidv4();
        
        const result = await cassandraDatabase.execute(Queries.createExpense, [id, newExpense.amount, newExpense.categoryid, newExpense.date, newExpense.description, newExpense.name, "Dave"]);
        
        return result;
    },

    async updateExpense(id: string, updatedExpense: Expense) {
        const result = await cassandraDatabase.execute(Queries.updateExpense, [updatedExpense.amount, updatedExpense.categoryid, updatedExpense.description, updatedExpense.name, id]);
        
        return result;
    },

    async deleteExpense(id: string) {
        const result = await cassandraDatabase.execute(Queries.deleteExpense, [id]);
        
        return result;
    },
    
    async getUserAmount(id: string) {
        const result = await cassandraDatabase.execute(Queries.getUserAmount, [id]);
        
        return result;
    },

    async getUserAmountByCategory(userid: string, categoryid: string) {
        const result = await cassandraDatabase.execute(Queries.getUserAmountByCategory, [userid, categoryid]);
        
        return result;
    },
};