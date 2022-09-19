import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import prisma from '../../src/database/prisma';

export async function generateUser() {
    const password = faker.internet.password(10);

    const user = {
        email: faker.internet.email(),
        password: password,
        confirmPassword: password,
    }

    return user
}

export async function inserUser(user: { password: string, confirmPassword: string, email: string }) {
    const passwordHash = await bcrypt.hash(user.password, 10);

    return await prisma.users.create({
        data: {
            email: user.email,
            password: passwordHash
        }
    });
}