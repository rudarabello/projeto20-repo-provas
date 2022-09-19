import { Router } from "express";
import { signUp, signIn } from "../controllers/authController";
import authValidation from "../middlewares/authvalidation";

const authRouter = Router();

authRouter.post('/sign-up', authValidation, signUp);
authRouter.post('/sign-in', authValidation, signIn);

export default authRouter;