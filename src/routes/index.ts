import { Router } from 'express';

import { AuthenticateRouter } from './authenticate.routes';
import { CategoriesRouter } from './categories.routes';
import { SpecificationsRouter } from './specifications.routes';
import { UsersRouter } from './users.routes';

const router = Router();

router.use('/categories', CategoriesRouter);
router.use('/specifications', SpecificationsRouter);
router.use('/users', UsersRouter);
router.use(AuthenticateRouter);

export { router };
