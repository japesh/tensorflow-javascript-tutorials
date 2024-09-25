import { Router } from 'express';
import UserController from '../controllers/UserController';
import { authenticate } from '../middleware/authMiddleware';

const userRouter = Router();

userRouter.post('/login', UserController.login);
userRouter.post('/register', UserController.register);
userRouter.get('/profile', authenticate, UserController.getProfile);
userRouter.post('/logout', UserController.logout);

export default userRouter;
