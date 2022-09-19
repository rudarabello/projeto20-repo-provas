
import { faker } from '@faker-js/faker';
import supertest from "supertest";
import app from "../../src/app";

export function __testFactory() {
    return {
        name: faker.word.noun(),
        pdfUrl: faker.internet.avatar() + '.pdf',
        categoryId: 1,
        teacherDisciplineId: 1
    }
}

export async function login(user: any) {
    await supertest(app).post('/sign-up').send(user);

    return await supertest(app).post('/sign-in').send(user);
}