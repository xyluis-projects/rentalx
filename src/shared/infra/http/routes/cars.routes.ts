import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { Router } from 'express';

const CarsRouter = Router();

const createCarController = new CreateCarController();

CarsRouter.post('/', createCarController.handle);

export { CarsRouter };
