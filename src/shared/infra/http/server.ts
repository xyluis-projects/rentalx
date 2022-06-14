import 'reflect-metadata';

import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';

import '@shared/typeorm';
import '@shared/container';

import { AppError } from '@shared/errors/AppError';
import { router } from '@shared/infra/http/routes';
import express, { NextFunction, Request, Response } from 'express';

import swaggerSetup from '../../../swagger.json';

const app = express();

app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSetup));

app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error: ${err.message}`,
    });
  },
);

app.listen(3333, () => console.log(`Listening on port 3333`));
