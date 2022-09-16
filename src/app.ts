import cors from 'cors';
import dotenv from 'dotenv';
import express, { json, Router } from 'express';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(Router);

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server running on port', PORT);
});
