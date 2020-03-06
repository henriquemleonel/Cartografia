exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string("firstName").notNull()
        table.string('lastName').notNull()
        table.string('password').notNull()
        table.string('email').notNull()
        table.boolean('isValid').notNull().defaultTo(false)
        table.boolean('isAdmin').notNull().defaultTo(false)
        table.integer('categoryId').unsigned().collate('utf8_unicode_ci')
        table.foreign('categoryId').references('id').inTable('categories')
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};