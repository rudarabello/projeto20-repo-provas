import prisma from "../database/prisma";

export async function getTeacherById(id: number) {
    const teacher = await prisma.teachers.findFirst({
        where: {
            id
        }
    })

    return teacher;
}