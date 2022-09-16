import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import router from './routes/router';
import { errorHandler } from './middlewares/errorHandler';
dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

export default app;