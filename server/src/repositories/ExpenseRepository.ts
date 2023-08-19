import { Expense } from "../models/Expense";
import { cassandraDatabase } from "../database/db";
import { getAllExpenses, getExpenseById, createExpense, updateExpense, deleteExpense } from "../database/queries/expenses";

export const ExpenseRepository = {
    async getAllExpenses() {
        const result = await cassandraDatabase.execute(getAllExpenses);
        console.log(result);
        return result;
    },

    async getExpenseById(id: Number) {
        const result = await cassandraDatabase.execute(getExpenseById, [id]);
        console.log(result);
        return result;
    },

    async createExpense(newExpense: Expense) {
        const result = await cassandraDatabase.execute(createExpense, [newExpense.expenseid, newExpense.amount, newExpense.categoryid, newExpense.date, newExpense.description, newExpense.name, newExpense.userid]);
        console.log(result);
        return result;
    },

    async updateExpense(id: Number, updatedExpense: Expense) {
        const result = await cassandraDatabase.execute(updateExpense, [updatedExpense.amount, updatedExpense.categoryid, updatedExpense.description, updatedExpense.name, id]);
        console.log(result);
        return result;
    },

    async deleteExpense(id: Number) {
        const result = await cassandraDatabase.execute(deleteExpense, [id]);
        console.log(result);
        return result;
    },
};