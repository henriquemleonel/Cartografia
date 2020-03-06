exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.timestamp('deletedAt')
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.dropColumn('deletedAt')
    })
};