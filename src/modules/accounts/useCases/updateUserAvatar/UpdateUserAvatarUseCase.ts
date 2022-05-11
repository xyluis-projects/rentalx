import { inject, injectable } from 'tsyringe';

import { deleteFile } from '../../../../utils/file';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  avatar_file?: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id, avatar_file }: IRequest) {
    const user = (await this.usersRepository.findById(user_id)) as User;

    if (user.avatar) await deleteFile(`./tmp/avatar/${user.avatar}`);

    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
