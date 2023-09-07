import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { TokenHelper } from '../helper/tokenHelper';

export const UserController = {
  async getAllUsers(req: Request, res: Response) {
    const result = await UserRepository.getAllUsers();
    if (result) {
      res.status(200).json(result.rows);
    }
  },

  async getUserById(req: Request, res: Response) {
    const id: string = req.params.id;

    const result = await UserRepository.getUserById(id);
    if (result?.rowLength != null && result.rowLength > 0) {
      res.status(200).json({ success: true, user: result.rows });
    } else {
      res.status(404).json({ success: false, message: "User not found", user: null });
    }
  },

  async createUser(req: Request, res: Response) {
    if (req.headers.authorization) {
      const userInfo = await TokenHelper.decodeToken(req.headers.authorization);
      if (userInfo) {
        req.body.userid = userInfo.sub;
        req.body.username = userInfo.username;
      }
    }

    const result = await UserRepository.createUser(req.body);
    if (result) {
      res.status(201).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: "Error" });
    }
  },

  async updateUser(req: Request, res: Response) {
    const id: string = req.params.id;
    const updatedUser = req.body;

    const checkExist = await UserRepository.getUserById(id);
    if (checkExist?.rowLength != null && checkExist.rowLength > 0) {
      const result = await UserRepository.updateUser(id, updatedUser);
      if (result) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ success: false, message: "Error" });
      }
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  },

  async deleteUser(req: Request, res: Response) {
    const id: string = req.params.id;

    const checkExist = await UserRepository.getUserById(id);
    if (checkExist?.rowLength != null && checkExist.rowLength > 0) {
      const result = await UserRepository.deleteUser(id);
      if (result) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ success: false, message: "Error" });
      }
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  },

  async verifyUser(req: Request, res: Response) {
    if (req.headers.authorization) {
      
      TokenHelper.decodeToken(req.headers.authorization)
      .then((token) => {
        if (token) {
          res.status(200).json({ success: true, userid: token.sub });
        }
      });
      
    }
  },
};
