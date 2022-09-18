import { Users } from '@prisma/client';

import { CustomError } from '../../middlewares/errorHandler';
import * as userRepository from '../../repositories/userRepository';
import * as businessRules from './bussinesRules';

import { TUserDetail } from '../../types/userType';
import { hashPassword, validatePassword } from '../../utils/encryptUtils';
import { generateToken } from '../../utils/jwtUtils';


export async function findUserById(id: number): Promise<Users | null> {
    return userRepository.findUserById(id);
}

export async function findUserByEmail(email: string): Promise<Users | null> {
    return userRepository.findUserByEmail(email);
}


export async function register(userData: TUserDetail): Promise<void> {
    const { email, password } = userData;

    await businessRules.ensureNewUserIsUnique(email);

    const hashedPassword = await hashPassword(password);

    await userRepository.insertUser({ email, password: hashedPassword });
}

export async function login(userData: TUserDetail): Promise<string> {
    const { email, password } = userData;

    const user = await findUserByEmail(email);

    if (!user) throw CustomError('error_forbidden', 'Forbidden');
    if (!validatePassword(password, user.password)) throw CustomError('error_forbidden', 'Forbidden');

    const token = generateToken({ id: user.id });

    return token;
}
