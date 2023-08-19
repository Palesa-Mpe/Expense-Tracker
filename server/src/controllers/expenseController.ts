import { Request, Response } from 'express';

export const ExpenseController = {
  async getAllUsers(req: Request, res: Response) {
    // const result = await UserRepository.getAllUsers();
    res.json({success: true});
  },
};
