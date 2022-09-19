import prisma from "../database/prisma";
import { TUserDetail } from '../types/userType';

export async function findUserByEmail(email: string) {
    return await prisma.users.findUnique({ where: { email } });
};

export async function signUp(user: TUserDetail) {
    await prisma.users.create({ data: user });
};