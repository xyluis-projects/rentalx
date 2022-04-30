import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const SpecificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

SpecificationsRouter.post('/', createSpecificationController.handle);

export { SpecificationsRouter };
