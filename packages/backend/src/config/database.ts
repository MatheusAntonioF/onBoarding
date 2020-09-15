import { ConnectionOptions } from 'typeorm';

const options: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,

  username: 'postgres',
  password: 'docker',
  database: 'on-boarding',

  synchronize: true,
  logging: false,
  entities: ['./src/entity/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],

  uuidExtension: 'pgcrypto',

  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: 'src/entity',
  },
};

export default options;
