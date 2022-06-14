import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { Router } from 'express';

const AuthenticateRouter = Router();

const authenticateUserController = new AuthenticateUserController();

AuthenticateRouter.post('/sessions', authenticateUserController.handle);

export { AuthenticateRouter };
