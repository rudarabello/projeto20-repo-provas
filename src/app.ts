import cors from 'cors';
import express, { json } from 'express';
import { handleErrorMiddleware } from './middlewares/errorHandler';
import router from './routes/router';
import 'express-async-errors';

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(handleErrorMiddleware);

export default app;