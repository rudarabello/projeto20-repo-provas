import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

dotenv.config();

export function encrypt(password: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export function validatePassword(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
}


export function generateToken(userId: number) {
    return jwt.sign({ userId }, process.env.JWT_SECRET as Secret, { expiresIn: '1d' });
}

export function verifyToken(token: string): string | JwtPayload {
    return jwt.verify(token, process.env.TOKEN_SECRET as Secret);
}
