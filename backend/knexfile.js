const { db } = require('./.env')

module.exports = {
    client: 'mysql',
    connection: db,
    migrations: {
        tableName: 'knex_migrations'
    }
}