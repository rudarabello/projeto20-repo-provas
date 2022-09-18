import { Users } from '@prisma/client';

import * as userRepository from '../../repositories/userRepository';
import { CustomError } from '../../middlewares/errorHandler';

export async function ensureNewUserIsUnique(email: string): Promise<void> {
    const duplicatedUser = await userRepository.findUserByEmail(email);
    if (duplicatedUser) {
        throw CustomError('error_conflict', 'Conflict');
    }
}

export async function ensureUserExists(email: string): Promise<Users> {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
        throw CustomError('error_not_found', 'Not Found');
    }

    return user;
}
