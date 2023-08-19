import { Request, Response } from 'express';
import {UserRepository} from '../repositories/UserRepository';

export const UserController = {
  async getAllUsers(req: Request, res: Response) {
    const result = await UserRepository.getAllUsers();
    res.json(result);
  },

  async getUserById(req: Request, res: Response) {
    const id: string = req.params.id;
    
    const result = await UserRepository.getUserById(id);
    res.json(result);
  },

  async createUser(req: Request, res: Response) {
    const result = await UserRepository.createUser(req.body);
    res.status(201).json(result);
  },

  async updateUser(req: Request, res: Response) {
    const id: string = req.params.id;
    const updatedUser = req.body;
    
    const result = await UserRepository.updateUser(id, req.body);
    res.json(result);
  },

  async deleteUser(req: Request, res: Response) {
    const id: string = req.params.id;
    const result = await UserRepository.deleteUser(id);
    res.json(result);
  },
};
