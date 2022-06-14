import { container } from 'tsyringe';

import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export class ImportCategoryController {
  async handle(request: Request, response: Response) {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file as Express.Multer.File);

    return response.send();
  }
}
