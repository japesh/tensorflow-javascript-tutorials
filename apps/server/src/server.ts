import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes';
import { createProxyMiddleware } from 'http-proxy-middleware';

// load env variables from .env file
dotenv.config();

const app: Application = express();

const corsOptions = {
  origin: ['http://localhost:3001'],
};

app.use(cors(corsOptions));
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use(bodyParser.json());
app.use(express.json());

app.use('/api', userRouter);

// http://localhost:3002/api/todos/1
app.use(
  '/api/*',
  createProxyMiddleware<Request, Response>({
    target: 'https://jsonplaceholder.typicode.com',
    pathRewrite: (path, req) => {
      console.log('path>>>>>>', path);
      return `${path}${req.originalUrl.replace('/api', '')}`;
    },
    changeOrigin: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('hello server is successfully running');
});

mongoose
  .connect(process.env.MONGOOSE_URI as string, {})
  .then(() => console.log('Mongo DB connected'))
  .catch((error) =>
    console.log(`error while connecting to mongo: ${error.message}`)
  );

const PORT = process.env.PORT || 3002;
app.listen(PORT, () =>
  console.log(`Server is successfully running at ${PORT}`)
);
