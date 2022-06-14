import { container } from 'tsyringe';

import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      email,
      password,
      driver_license,
    });

    return response.sendStatus(201);
  }
}

export { CreateUserController };
