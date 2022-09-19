import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { verifyError } from "../middlewares/errorHandler";
import * as errorUtils from '../utils/errorUtils';
import * as authService from '../services/authService'


dotenv.config();

declare module 'http' {
    interface IncomingHttpHeaders {
        "x-access-token"?: string
    }
}

export function authorization(req: Request, res: Response, next: NextFunction) {
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

export async function tokenMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) throw errorUtils.unauthorizedError('token');

    try {
        const secretKey = process.env.JWT_SECRET_KEY ?? 'secretKey';
        const { id } = jwt.verify(token, secretKey) as { id: number };

        const user = await authService.findUserById(id);
        if (!user) throw errorUtils.notFoundError('user');

        res.locals.user = user;

        next()

    } catch (err) {
        throw errorUtils.unauthorizedError('token')
    }

}