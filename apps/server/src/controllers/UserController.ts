import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import User from '../models/users';
import { UserRequest } from '../types/express';

class UserController {
  async register(req: Request, res: Response) {
    const { userName, email, password } = req.body;

    try {
      const user = await AuthService.register(email, password);
      res.status(201).json({ message: 'user is created successfully' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const token = await AuthService.login(email, password);

      res.cookie('token', token, {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      });
      res.status(200).json({ token });
    } catch (error: any) {
      console.log('error', error);
      res.status(401).json({ error: error.message });
    }
  }
  async logout(req: Request, res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });
    res.status(200).json({ message: 'logged out successfully' });
  }
  async getProfile(req: UserRequest, res: Response) {
    try {
      res.status(200).json({ ...req.user });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
