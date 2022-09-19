import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { verifyError } from "../middlewares/errorHandler";

dotenv.config();

declare module 'http' {
    interface IncomingHttpHeaders {
        "x-access-token"?: string
    }
}

export default function authorization(req: Request, res: Response, next: NextFunction) {
    const token: any = req.headers['x-access-token'];
    if (!token) throw verifyError(401, "You didn't sent validation token!");
    try {
        const userInfo = jwt.verify(token, process.env.JWT_SECRET as Secret);
        res.locals.userInfo = userInfo;
        next();
    } catch (error) {
        return res.status(401).send("Invalid token!")
    }
}