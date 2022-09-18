import { Users } from '@prisma/client';

import client from '../config/prisma';
import { TUserDetail } from '../types/userType';

export async function findUserById(id: number): Promise<Users | null> {
    return client.users.findUnique({ where: { id } });
}

export async function findUserByEmail(email: string): Promise<Users | null> {
    return client.users.findUnique({ where: { email } });
}

export async function insertUser(userData: TUserDetail): Promise<void> {
    await client.users.create({ data: { ...userData } });
}
