import { Repository } from 'typeorm';

import { dataSource } from '@shared/typeorm';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../../repositories/ICategoriesRepository';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await this.repository.findOne({ where: { name } });

    return category;
  }
}

export { CategoriesRepository };
