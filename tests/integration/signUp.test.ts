import app from '../../src/app';
import supertest from 'supertest';
import prisma from '../../src/database/prisma';
import { __userFactory } from "../factories/userFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Users"`;
});

describe('POST /sign-up', () => {
    it('returns 422 when sending invalid user object', async () => {
        const failUser = {
            email: "aaaaa",
            password: "1234"
        };

        const result = await supertest(app).post('/sign-up').send(failUser);

        expect(result.status).toBe(422);
    });

    it("returns 422 when confirmPass doesn't match password!", async () => {
        const failUser = {
            email: "fulanodetal@gmail.com",
            password: "1234",
            confirmPass: "12345"
        };

        const result = await supertest(app).post('/sign-up').send(failUser);

        expect(result.status).toBe(422);
    });

    it("returns 409 when the email was already registered!", async () => {
        const user = __userFactory();

        await supertest(app).post('/sign-up').send(user);

        const result = await supertest(app).post('/sign-up').send(user);

        expect(result.status).toBe(409);
    });

    it('returns 201 when successfully register an user', async () => {
        const user = __userFactory();

        const result = await supertest(app).post('/sign-up').send(user);

        expect(result.status).toBe(201);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});