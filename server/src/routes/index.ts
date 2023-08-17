import express, { Router } from 'express';
import {userRoutes} from './user';

export const router : Router = express.Router();

router.use('/users', userRoutes);
