import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: '72.14.190.27',
  port: 8080,
  username: 'xyluis',
  password: 'ignite',
  database: 'rentx',
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/modules/**/entities/*.ts'],
  synchronize: true,
  migrationsTableName: 'migrations',
});

dataSource.initialize();
