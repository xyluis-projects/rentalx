import { Router } from 'express';

import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const AuthenticateRouter = Router();

const authenticateUserController = new AuthenticateUserController();

AuthenticateRouter.post('/sessions', authenticateUserController.handle);

export { AuthenticateRouter };
