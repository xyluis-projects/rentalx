import { Router } from 'express';

import { AuthenticateRouter } from './authenticate.routes';
import { CarsRouter } from './cars.routes';
import { CategoriesRouter } from './categories.routes';
import { SpecificationsRouter } from './specifications.routes';
import { UsersRouter } from './users.routes';

const router = Router();

router.use('/categories', CategoriesRouter);
router.use('/specifications', SpecificationsRouter);
router.use('/users', UsersRouter);
router.use('/cars', CarsRouter);
router.use(AuthenticateRouter);

export { router };
