exports.up = function(knex) {
  return knex.schema.createTable('events', table => {
    table.increments('id')
    table.integer('userId').unsigned().collate('utf8_unicode_ci')
    table.foreign('userId').references('id').inTable('users')
    table.string("title").notNull()
    table.timestamp('date')
    table.timestamp('createAt').notNull()
    table.string('street')
    table.string('neighborhood')
    table.string('city')
    table.float('ticket')
    table.string('link')
    table.text('description')
    table.integer('categoryId').unsigned().collate('utf8_unicode_ci')
    table.foreign('categoryId').references('id').inTable('categories')
    table.string('imgUrl')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('events')
};
