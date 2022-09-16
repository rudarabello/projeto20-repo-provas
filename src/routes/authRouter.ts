import { Router } from 'express';

import * as authController from '../controllers/auth';
import { validateSchema } from '../middlewares/validateSchema';

const router = Router();

router.post('/register',
    validateSchema('newUserSchema'),
    authController.register
);
router.post('/login',
    validateSchema('userSchema'),
    authController.login
);

export default router;
