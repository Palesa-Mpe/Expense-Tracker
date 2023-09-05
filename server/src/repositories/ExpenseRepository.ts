import { Expense } from "../models/Expense";
import { cassandraDatabase } from "../database/db";
import { v4 as uuidv4 } from 'uuid';

import * as Queries from "../database/queries/expenses";

export const ExpenseRepository = {
    async getAllExpenses() {
        const result = await cassandraDatabase.execute(Queries.getAllExpenses);
        
        return result;
    },
    
    async getAllUserExpenses(id: Number) {
        const result = await cassandraDatabase.execute(Queries.getAllUserExpenses, [id]);
        
        return result;
    },

    async getAllUserExpensesByCategory(userid: Number, categoryid: Number) {
        const result = await cassandraDatabase.execute(Queries.getAllUserExpensesByCategory, [userid, categoryid]);
        
        return result;
    },

    async getExpenseById(id: Number) {
        const result = await cassandraDatabase.execute(Queries.getExpenseById, [id]);
        
        return result;
    },

    async createExpense(newExpense: Expense) {
        const id = uuidv4();
        
        const result = await cassandraDatabase.execute(Queries.createExpense, [id, newExpense.amount, newExpense.categoryid, newExpense.date, newExpense.description, newExpense.name, newExpense.userid]);
        
        return result;
    },

    async updateExpense(id: Number, updatedExpense: Expense) {
        const result = await cassandraDatabase.execute(Queries.updateExpense, [updatedExpense.amount, updatedExpense.categoryid, updatedExpense.description, updatedExpense.name, id]);
        
        return result;
    },

    async deleteExpense(id: Number) {
        const result = await cassandraDatabase.execute(Queries.deleteExpense, [id]);
        
        return result;
    },
    
    async getAvgAmount(id: Number) {
        const result = await cassandraDatabase.execute(Queries.getAvgAmount, [id]);
        
        return result;
    },

    async getSumAmount(id: Number) {
        const result = await cassandraDatabase.execute(Queries.getSumAmount, [id]);
        
        return result;
    },

    async getAvgAmountByCategory(userid: Number, categoryid: Number) {
        const result = await cassandraDatabase.execute(Queries.getAvgAmountByCategory, [userid, categoryid]);
        
        return result;
    },

    async getSumAmountByCategory(userid: Number, categoryid: Number) {
        const result = await cassandraDatabase.execute(Queries.getSumAmountByCategory, [userid, categoryid]);
        
        return result;
    },
};