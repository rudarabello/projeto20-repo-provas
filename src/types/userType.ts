import { Users } from '@prisma/client';

type TUserDetail = Omit<Users, 'id'>;

interface IUserRegisterData extends TUserDetail {
    passwordConfirmation: string;
}

export { IUserRegisterData, TUserDetail };
