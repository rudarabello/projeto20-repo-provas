import { Router } from "express";
import authorization from "../middlewares/authorization";
import { getDisciplineByTermId } from "../controllers/discipline";

const disciplineRouter = Router();

disciplineRouter.get("/terms/:id", authorization, getDisciplineByTermId);

export default disciplineRouter;