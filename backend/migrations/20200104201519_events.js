exports.up = function(knex) {
    return knex.schema.createTable('events', table => {
        table.increments('id')
        table.string('name').notNull()
        table.date('date').notNull()
        table.integer('time').notNull()
        table.string('location').notNull()
        table.float('price')
        table.binary('description')
        table.string('link')
    })
};

exports.down = function(knex) {

};