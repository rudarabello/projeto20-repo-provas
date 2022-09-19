import { Router } from "express";
import * as testController from '../controllers/testController';
import { tokenMiddleware } from '../middlewares/authorization';
import schemaMiddleware from '../middlewares/schemaMiddleware';
import testSchema from "../schemas/testSchema";

const testRouter = Router();

testRouter.use(tokenMiddleware);

testRouter.post('/tests', schemaMiddleware(testSchema), testController.createTest);
testRouter.get('/disciplines/tests', testController.getTestsFromDiscipline);
testRouter.get('/teachers/tests', testController.getTestsFromTeacher);

export default testRouter;