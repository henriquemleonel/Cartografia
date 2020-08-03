exports.up = function(knex) {
  return knex.schema.dropTable('events')
};

exports.down = function(knex) {
};
