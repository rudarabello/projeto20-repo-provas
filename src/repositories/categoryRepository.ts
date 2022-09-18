import client from "../config/prisma";


export async function findCategoryById(id: number) {
    return client.categories.findUnique({ where: { id } });
}