exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.boolean("pinCompleted").defaultTo(false).notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.dropColumn("pinCompleted")
    })
};