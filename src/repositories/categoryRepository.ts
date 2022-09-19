import prisma from "../database/prisma";

export async function getCategoryById(id: number) {
    const category = await prisma.categorys.findFirst({
        where: {
            id
        }
    })

    return category;
}