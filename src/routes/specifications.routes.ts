import { Router } from 'express';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const SpecificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

SpecificationsRouter.use(ensureAuthenticated);
SpecificationsRouter.post('/', createSpecificationController.handle);

export { SpecificationsRouter };
