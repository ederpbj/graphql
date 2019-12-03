// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      database: 'graphql',
      user: 'root',
      password: '098098my',
    },
    pool: {
      min: 2,
      max: 10
    },
    migration: {
      tableName: 'knex_migrations'
    }
  
};
