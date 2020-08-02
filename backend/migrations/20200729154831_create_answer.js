exports.up = function(knex) {
  return knex.schema.createTable('answer', table => {
    table.increments('id');
    table.timestamp('createAt').notNull()
    table.timestamp('deleteAt')
    table.text('content')
    table.integer('numberOfLikes').notNull().defaultTo(0)
    //Chaves estrangeiras
    table.integer('replyId').unsigned().collate('utf8_unicode_ci')
    table.foreign('replyId').references('id').inTable('replies')
    table.integer('userId').unsigned().collate('utf8_unicode_ci')
    table.foreign('userId').references('id').inTable('users')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('answer')
};
