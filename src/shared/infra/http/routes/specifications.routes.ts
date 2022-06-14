import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated';
import { Router } from 'express';

const SpecificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

SpecificationsRouter.use(ensureAuthenticated);
SpecificationsRouter.post('/', createSpecificationController.handle);

export { SpecificationsRouter };
