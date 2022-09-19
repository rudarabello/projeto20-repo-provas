import { verifyError } from "../middlewares/errorHandler";
import * as authRepository from "../repositories/authRepository";
import { encrypt, generateToken, validatePassword } from "../utils/authUtils";
import * as errorUtils from '../utils/errorUtils';

export async function signUp(dataUser: authRepository.CreateUser) {
    const { email, password } = dataUser;
    const checkUser = await authRepository.findByEmail(email);
    if (checkUser) throw errorUtils.conflictError('user');
    const passwordHash = encrypt(password);
    authRepository.insertUser({ email, password: passwordHash })
}

export async function signIn(dataUser: authRepository.CreateUser) {
    try {
        const { email, password } = dataUser;
        const user = await authRepository.findByEmail(email);
        if (!user) throw errorUtils.unauthorizedError('credentials');
        if (!validatePassword(password, user.password)) throw errorUtils.unauthorizedError('credentials');
        const token = generateToken(user.id);
        return token;
    } catch (error) {
        console.log(error)
    }
};