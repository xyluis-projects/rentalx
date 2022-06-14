import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { dataSource } from '..';

dataSource.logger.log('info', 'a');
async function create() {
  await dataSource.initialize();

  const id = uuidv4();
  const password = await hash('admin', 8);

  console.log('Creating user...');

  await dataSource.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
      values('${id}', 'admin', 'admin@rentalx.com.br', '${password}', true, 'now()', '012345')
    `,
  );
}

create().then(async () => {
  await dataSource.destroy();
  console.log('Successfully created an admin user');
});
