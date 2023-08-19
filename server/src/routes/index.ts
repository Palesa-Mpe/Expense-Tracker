import express, { Router } from 'express';
import {userRoutes} from './user';
import { expenseRoutes } from './expense';
import { categoryRoutes } from './category';

export const router : Router = express.Router();

router.use('/users', userRoutes);
router.use('/expenses', expenseRoutes);
router.use('/categories', categoryRoutes);
