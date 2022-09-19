import { faker } from '@faker-js/faker';
import client from '../../src/database/prisma';
import { UserData } from '../../src/types/userType';
import { encrypt } from '../../src/utils/authUtils';

export function __userFactory() {
    const password = faker.internet.password();
    return {
        email: faker.internet.email(),
        password,
        confirmPass: password
    }
};

export async function insertUser(user: UserData) {
    const hashedPassword = encrypt(user.password);
    const insertedUser = await client.users.create({
        data: {
            email: user.email, password: hashedPassword
        }
    });

    return insertedUser;
}