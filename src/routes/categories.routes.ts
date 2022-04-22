import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoryRepository';

const CategoriesRouter = Router();

const categoryRepository = new CategoryRepository();

CategoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category already exists' });
  }

  categoryRepository.create({ name, description });

  return response.sendStatus(201);
});

CategoriesRouter.get('/', (request, response) => {
  const categories = categoryRepository.list();

  return response.json(categories);
});

export { CategoriesRouter };
