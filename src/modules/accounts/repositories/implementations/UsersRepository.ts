import { Repository } from 'typeorm';

import { dataSource } from '../../../../database';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      avatar,
      email,
      driver_license,
      password,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOne({ where: { email } });

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ id });

    return user;
  }
}

export { UsersRepository };
