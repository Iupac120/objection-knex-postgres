require('dotenv').config()
// // Update with your config settings.

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */

// const {knexSnakeCaseMapper} = require('objection')
// module.exports = {

//   development: {
//     client: 'postgresql',
//     connection: {
//       database: process.env.DATABASE,
//       user:     process.env.USER,
//       password: process.env.PASSWORD,
//       port:process.env.PORT,
//       host:process.env.HOST
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     },
//     seeds:{},
//     ...knexSnakeCaseMapper,
//   },
// };

const { knexSnakeCaseMapper } = require('objection');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER,
      password:process.env.PASSWORD,
      port:process.env.PORT,
      host:process.env.HOST,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory:'./seeds',
    },
  },
  ...knexSnakeCaseMapper,
};
