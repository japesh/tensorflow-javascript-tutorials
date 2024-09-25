import { Request } from 'express';

interface UserType extends Document {
  email: string;
  password: string;
  _id: string;
  role: string;
}

export interface UserRequest extends Request {
  user?: UserType;
}

declare module 'express-serve-static-core' {
  interface Request {
    user: UserType;
  }
}
