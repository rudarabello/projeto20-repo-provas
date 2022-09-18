import client from "../config/prisma";

export async function getAllTerms() {
    return await client.terms.findMany();
}