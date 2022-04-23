import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const CategoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

CategoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

CategoriesRouter.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRouter.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { CategoriesRouter };
