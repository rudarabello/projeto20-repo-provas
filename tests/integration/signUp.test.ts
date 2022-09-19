import supertest from 'supertest';
import app from '../../src/app';
import prisma from '../../src/database/prisma';
import { __userFactory } from "../factories/userFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Users"`;
});

afterAll(async () => {
    await prisma.$disconnect();
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
});

describe('POST /sign-up', () => {
    it("returns 422 when confirmPass doesn't match password!", async () => {
        const failUser = {
            email: "fulanodetal@gmail.com",
            password: "1234",
            confirmPass: "12345"
        };
        const result = await supertest(app).post('/sign-up').send(failUser);
        expect(result.status).toBe(422);
    });
});


// describe('POST /sign-up', () => {
//     it("returns 409", async () => {
//         const user = __userFactory();

//         await supertest(app).post('/sign-up').send(user);

//         const result = await supertest(app).post('/sign-up').send(user);

//         expect(result.body);
//     });

// });


describe('POST /sign-up', () => {
    it('returns 201 when successfully register an user', async () => {
        const user = __userFactory();
        const result = await supertest(app).post('/sign-up').send(user);
        expect(result.status).toBe(201);
    });
});