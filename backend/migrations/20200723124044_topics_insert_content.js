exports.up = function(knex) {
    return knex.schema.table('topics', table => {
      table.string('content').defaultTo(null)
      table.integer('userId').unsigned().collate('utf8_unicode_ci')
      table.foreign('userId').references('id').inTable('users')
    })
};

exports.down = function(knex) {
    return knex.schema.table('topics', table => {
        table.dropColumn('content')
        table.dropColumn('userId')
    })
};
