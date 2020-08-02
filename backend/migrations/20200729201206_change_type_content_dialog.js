
exports.up = function(knex) {
  return knex.schema.table('topics', function(table){
    table.dropColumn("content")
  })
}

exports.down = function(knex) {
  return knex.schema.createTable('topics', function(table){
      table.string('content').defaultTo(null)
  }) 
}
