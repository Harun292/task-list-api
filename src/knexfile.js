//import { testDbUri, dbUri } from './config/vars';
//import { knexSnakeCaseMappers } from 'objection';

const { testDbUri, dbUri } = require('./config/vars');
const { knexSnakeCaseMappers } = require('objection');

const config = {
  development: {
    client: 'pg',
    connection: dbUri,
    // debug: true,
    // asyncStackTraces: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/database/migrations',
      tableName: 'knex_migrations',
      extension: 'js',
    },
    seeds: {
      directory: __dirname + '/database/seeds/development',
      extension: 'js',
    },
    ...knexSnakeCaseMappers(),
  },

  test: {
    client: 'pg',
    connection: testDbUri,
    // debug: true,
    // asyncStackTraces: true,
    // pool: {
    //   min: 0,
    //   max: 1,
    // },
    migrations: {
      directory: __dirname + '/database/migrations',
      tableName: 'knex_migrations',
      extension: 'js',
    },
    seeds: {
      directory: __dirname + '/database/seeds/testing',
      extension: 'js',
    },
    ...knexSnakeCaseMappers(),
  },

  production: {
    client: 'pg',
    connection: dbUri,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/database/migrations',
      tableName: 'knex_migrations',
      extension: 'js',
    },
    seeds: {
      directory: __dirname + '/database/seeds/production',
      extension: 'js',
    },
    ...knexSnakeCaseMappers(),
  },

  // onUpdateTrigger: table => `
  //   CREATE TRIGGER ${table}_updated_at
  //   BEFORE UPDATE ON ${table}
  //   FOR EACH ROW
  //   EXECUTE PROCEDURE on_update_timestamp();
  // `,
};

module.exports = config;
