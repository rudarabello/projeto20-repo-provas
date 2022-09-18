import { Router } from "express";
import { validateSchema } from '../middlewares/validateSchema';
import { getTerms } from "../services/termService";

const termRouter = Router();

termRouter.get('/terms', validateSchema('userSchema'), getTerms);

export default termRouter;