exports.up = function(knex) {
  return knex.schema.createTable('repliesAnswer', table => {
    table.integer('replyId').unsigned().collate('utf8_unicode_ci')
    table.foreign('replyId').references('id').inTable('replies')
    table.integer('answerId').unsigned().collate('utf8_unicode_ci')
    table.foreign('answerId').references('id').inTable('answer')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('repliesAnswer')
};
;
