exports.up = function(knex) {
  return knex.schema.createTable('topicsReplies', table => {
    table.integer('topicId').unsigned().collate('utf8_unicode_ci')
    table.foreign('topicId').references('id').inTable('topics')
    table.integer('replyId').unsigned().collate('utf8_unicode_ci')
    table.foreign('replyId').references('id').inTable('replies')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('topicsReplies')
};
