import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe('Creae Car', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it('Should be able to create a new car', async () => {
    await createCarUseCase.execute({
      name: 'Car Name',
      description: 'Car Description',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });
  });

  it('Should not be able to create a new car width exists license plate', async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car 1',
        description: 'Car 1 Description',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category',
      });

      await createCarUseCase.execute({
        name: 'Car 2',
        description: 'Car 2 Description',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it('Should not be able to create a new car width available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car 1',
      description: 'Car 1 Description',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    expect(car.available).toBe(true);
  });
});
