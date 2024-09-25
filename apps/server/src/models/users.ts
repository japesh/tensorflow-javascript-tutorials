import mongoose, { Schema } from 'mongoose';
import { UserType } from '../types/express';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v: string) {
        return emailRegex.test(v);
      },
      message: (props: { value: string }) =>
        `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

const User = mongoose.model<UserType>('User', UserSchema);

export default User;
