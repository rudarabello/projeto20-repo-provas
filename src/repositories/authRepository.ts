import { Users } from "@prisma/client";
import prisma from "../database/prisma";

export type CreateUser = Omit<Users, "id">;

export async function insertUser(dataUser: CreateUser) {
    await prisma.users.create({
        data: dataUser
    })
}

export async function findByEmail(email: string) {
    return await prisma.users.findFirst({
        where: {
            email
        }
    })
}

export async function findById(id: number) {
    return await prisma.users.findUnique({
        where: {
            id
        }
    })
}

export async function getUsers() {
    const user = await prisma.users.findMany()

    return user
}