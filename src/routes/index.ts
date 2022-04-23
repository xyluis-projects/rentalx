import { Router } from 'express';

import { CategoriesRouter } from './categories.routes';
import { SpecificationsRouter } from './specifications.routes';

const router = Router();

router.use('/categories', CategoriesRouter);
router.use('/specifications', SpecificationsRouter);

export { router };
