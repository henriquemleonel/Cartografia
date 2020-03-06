exports.up = function(knex) {
    return knex.schema.createTable('addresses', table => {
        table.increments('id')
        table.string('street').notNull()
        table.string('streetNumber').notNull()
        table.string('zipCode').notNull()
        table.string('neighborhood').notNull()
        table.integer('userId').unsigned().references('id').inTable('users').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('addresses')
};