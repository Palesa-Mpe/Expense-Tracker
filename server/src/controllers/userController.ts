import { Request, Response } from 'express';
import {UserRepository} from '../repositories/UserRepository';

export const UserController = {
  async getAllUsers(req: Request, res: Response) {
    const result = await UserRepository.getAllUsers();
    res.status(200).json(result);
  },

  async getUserById(req: Request, res: Response) {
    const id: string = req.params.id;
    
    const result = await UserRepository.getUserById(id);
    if (result) {
      res.status(200).json({success: true, user: result});
    } else {
      res.status(404).json({success: false, message:"User not found", user: result});
    }
  },

  async createUser(req: Request, res: Response) {
    const result = await UserRepository.createUser(req.body);
    res.json(result);
    // if (result) {
    //   res.status(201).json({success: true});
    // } else {
    //   res.status(400).json({success: false, message:"Error"});
    // }
  },

  async updateUser(req: Request, res: Response) {
    const id: string = req.params.id;
    const updatedUser = req.body;
    
    const result = await UserRepository.updateUser(id, req.body);
    res.json(result);
    // if (result) {
    //   res.status(204).json({success: true});
    // } else {
    //   res.status(404).json({success: false, message:"User not found"});
    // }
  },

  async deleteUser(req: Request, res: Response) {
    const id: string = req.params.id;
    const result = await UserRepository.deleteUser(id);
    res.json(result);
    // if (result) {
    //   res.status(200).json({success: true});
    // } else {
    //   res.status(404).json({success: false, message:"User not found"});
    // }
  },
};
