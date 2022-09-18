import client from "../config/prisma";

export async function findTeacherDisciplineById(id: number) {
    return client.teachersDisciplines.findUnique({ where: { id } });
};

export async function getByTermId(id: number) {
    return client.disciplines.findMany({ where: { termId: id } });
};