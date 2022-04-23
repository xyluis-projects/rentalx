import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const SpecificationsRouter = Router();

SpecificationsRouter.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { SpecificationsRouter };
