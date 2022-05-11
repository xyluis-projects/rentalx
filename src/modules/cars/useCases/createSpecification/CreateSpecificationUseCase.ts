import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepository,
  ) {}

  async execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists');
    }

    this.specificationsRepository.create({ name, description });
  }
}
