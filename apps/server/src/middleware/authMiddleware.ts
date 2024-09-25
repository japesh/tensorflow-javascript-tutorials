import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/AuthService';
import { UserRequest, UserType } from '../types/express';

export const authenticate = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  // const authHeader = req.headers.authorization;
  console.log('req.cookies>>>>>>>>>>>>>', req.cookies.token);
  if (!req.cookies) {
    return res.status(401).json({ message: 'cookies are missing' });
  }

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const user = AuthService.verifyToken(token) as UserType;

    req.user = user;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const authorization =
  (roles: string[]) =>
  (req: UserRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'you are not authorized' });
    }
    next();
  };
