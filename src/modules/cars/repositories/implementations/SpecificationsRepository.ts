import { Repository } from 'typeorm';

import { dataSource } from '../../../../database';
import { Specification } from '../../entities/Specifiction';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = dataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification | null> {
    const specification = await this.repository.findOne({ where: { name } });

    return specification;
  }
}
