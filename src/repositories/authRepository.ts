import prisma from "../database/prisma";
import { UserData } from '../types/userType';

export async function findUserByEmail(email: string) {
    return prisma.users.findUnique({ where: { email } });
};

export async function signUp(user: UserData) {
    await prisma.users.create({ data: user });
};