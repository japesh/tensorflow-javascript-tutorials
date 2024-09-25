import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users';

class AuthService {
  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    return user.save();
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email }).lean();
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }
    const { password: _, ..._user } = user;
    const token = jwt.sign(_user, process.env.JWT_SECRET as string);

    return token;
  }

  verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  }
}

export default new AuthService();
