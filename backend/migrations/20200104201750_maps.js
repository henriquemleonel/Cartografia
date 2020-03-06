exports.up = function(knex) {
    return knex.schema.createTable('maps', table => {
        table.increments('id')
        table.integer('pinId').unsigned().references('id').inTable('pins').notNull()
        table.float('x').notNull()
        table.float('y').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('maps')
};