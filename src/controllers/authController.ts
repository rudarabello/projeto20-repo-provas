import { Request, Response } from "express";
import * as authServices from "../services/authService"

export async function createUser(
    req: Request,
    res: Response,
) {

    const { email, password }: { email: string, password: string } = req.body;

    await authServices.signUp({ email, password });

    res.status(201).send({ message: "User successfully registered!" });
}

export async function loginUser(
    req: Request,
    res: Response,
) {
    const { email, password }: { email: string, password: string } = req.body;

    const token = await authServices.signIn({ email, password });

    res.status(200).send({ token });
}