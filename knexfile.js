

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:process.env.DB_HOST || "127.0.0.1",
      port:5432,
      database: 'api',
      user:     'ryotakaya',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:'./migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host:'local',
      port:5432,
      database: 'api',
      user:     'ryotakaya',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:'./migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:'local',
      port:5432,
      database: 'api',
      user:     'ryotakaya',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:'./migrations'
    }
  }

};
