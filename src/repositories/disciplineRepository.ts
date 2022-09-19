import prisma from "../database/prisma";

export async function getDisciplineById(id: number) {
    const discipline = await prisma.disciplines.findFirst({
        where: {
            id
        }
    });

    return discipline;
}