import { Users } from '@prisma/client';

import prisma from '../database/prisma';
import { TUserDetail } from '../types/userType';

export async function findUserById(id: number): Promise<Users | null> {
    return prisma.users.findUnique({ where: { id } });
}

export async function findUserByEmail(email: string): Promise<Users | null> {
    return prisma.users.findUnique({ where: { email } });
}

export async function insertUser(userData: TUserDetail): Promise<void> {
    await prisma.users.create({ data: { ...userData } });
}
