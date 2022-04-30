import express from 'express';
import swaggerUI from 'swagger-ui-express';

import './database';
import './shared/container';

import { router } from './routes';
import swaggerSetup from './swagger.json';

const app = express();

app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSetup));

app.use(router);

app.listen(3333, () => console.log(`Listening on port 3333`));
