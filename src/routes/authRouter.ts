import { Router } from "express";
import { register, login } from "../controllers/authController";
import authValidation from "../middlewares/authvalidation";

const authRouter = Router();

authRouter.post('/sign-up', authValidation, register);
authRouter.post('/sign-in', authValidation, login);

export default authRouter;