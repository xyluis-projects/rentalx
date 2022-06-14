import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: 8080,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
  entities: ['./src/modules/**/entities/*.ts'],
  synchronize: true,
  migrationsTableName: 'migrations',
});

dataSource.initialize();
