import multer from 'multer';

import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '@modules/cars/useCases/listCategories/ListCategoriesController';
import { Router } from 'express';

const CategoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

CategoriesRouter.post('/', createCategoryController.handle);

CategoriesRouter.get('/', listCategoriesController.handle);

CategoriesRouter.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);

export { CategoriesRouter };
