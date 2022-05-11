import { Router } from 'express';
import multer from 'multer';

import config from '../config/upload';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const UsersRouter = Router();

const uploadUserAvatar = multer(config.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

UsersRouter.post('/', createUserController.handle);
UsersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  uploadUserAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { UsersRouter };
