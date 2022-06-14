import { container } from 'tsyringe';

import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    );

    await createSpecificationUseCase.execute({ name, description });

    return response.sendStatus(201);
  }
}
