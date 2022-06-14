import { container } from 'tsyringe';

import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const categories = await listCategoriesUseCase.execute();

    return response.json(categories);
  }
}
