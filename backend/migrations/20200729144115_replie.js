exports.up = function(knex) {
  return knex.schema.createTable('replies', table => {
    table.increments('id')
    table.timestamp('createAt').notNull()
    table.timestamp('deleteAt')
    table.text('content').notNull()
    table.integer('numberOfLikes').notNull().defaultTo(0)
    //Chaves estrangeiras
    table.integer('topicId').unsigned().collate('utf8_unicode_ci')
    table.foreign('topicId').references('id').inTable('topics')
    table.integer('userId').unsigned().collate('utf8_unicode_ci')
    table.foreign('userId').references('id').inTable('users')
  })

}

exports.down = function(knex) {
  return knex.schema.dropTable('replies')
}
