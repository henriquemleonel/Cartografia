exports.up = function(knex) {
    return knex.schema.createTable('pins', table => {
        table.increments("id")
        table.string('name').notNull()
        table.string('email')
        table.string('phone')
        table.binary('description').notNull()
        table.string('imageUrl')
        table.string('link1')
        table.string('link2')
        table.string('link3')
        table.integer('categoryId').unsigned().references('id').inTable('categories').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pins')
};