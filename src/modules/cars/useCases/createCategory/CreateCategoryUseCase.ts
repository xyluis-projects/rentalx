import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists');
    }

    await this.categoriesRepository.create({ name, description });
  }
}
