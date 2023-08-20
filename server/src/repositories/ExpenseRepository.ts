import { Expense } from "../models/Expense";
import { cassandraDatabase } from "../database/db";
import * as Queries from "../database/queries/expenses";

export const ExpenseRepository = {
    async getAllExpenses() {
        const result = await cassandraDatabase.execute(Queries.getAllExpenses);
        console.log(result);
        return result;
    },
    
    async getAllUserExpenses(id: string) {
        const result = await cassandraDatabase.execute(Queries.getAllUserExpenses, [id]);
        console.log(result);
        return result;
    },

    async getAllUserExpensesByCategory(userid: string, categoryid: Number) {
        const result = await cassandraDatabase.execute(Queries.getAllUserExpensesByCategory, [userid, categoryid]);
        console.log(result);
        return result;
    },

    async getExpenseById(id: Number) {
        const result = await cassandraDatabase.execute(Queries.getExpenseById, [id]);
        console.log(result);
        return result;
    },

    async createExpense(newExpense: Expense) {
        const result = await cassandraDatabase.execute(Queries.createExpense, [newExpense.expenseid, newExpense.amount, newExpense.categoryid, newExpense.date, newExpense.description, newExpense.name, newExpense.userid]);
        console.log(result);
        return result;
    },

    async updateExpense(id: Number, updatedExpense: Expense) {
        const result = await cassandraDatabase.execute(Queries.updateExpense, [updatedExpense.amount, updatedExpense.categoryid, updatedExpense.description, updatedExpense.name, id]);
        console.log(result);
        return result;
    },

    async deleteExpense(id: Number) {
        const result = await cassandraDatabase.execute(Queries.deleteExpense, [id]);
        console.log(result);
        return result;
    },
    
    async getAvgAmount(id: string) {
        const result = await cassandraDatabase.execute(Queries.getAvgAmount, [id]);
        console.log(result);
        return result;
    },

    async getSumAmount(id: string) {
        const result = await cassandraDatabase.execute(Queries.getSumAmount, [id]);
        console.log(result);
        return result;
    },

    async getAvgAmountByCategory(userid: string, categoryid: Number) {
        const result = await cassandraDatabase.execute(Queries.getAvgAmountByCategory, [userid, categoryid]);
        console.log(result);
        return result;
    },

    async getSumAmountByCategory(userid: string, categoryid: Number) {
        const result = await cassandraDatabase.execute(Queries.getSumAmountByCategory, [userid, categoryid]);
        console.log(result);
        return result;
    },
};