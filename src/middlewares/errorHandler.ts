import { NextFunction, Request, Response } from "express";
import { errorTypeToStatusCode, isAppError } from '../utils/errorUtils';
export async function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    return res.status(error.status).send(error.message);
}

export function verifyError(status: number, message: string) {
    return {
        status,
        message
    }
}

export function handleErrorMiddleware(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {

    if (isAppError(err)) {
        const statusCode = errorTypeToStatusCode(err.type);
        return res.status(statusCode).send(err.message)
    }

    console.log(err);

    res.sendStatus(500);
}