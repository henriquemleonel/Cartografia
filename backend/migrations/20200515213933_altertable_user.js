exports.up = function(knex) {
    return knex.schema.table('users', table => {
        table.string('imgUrl').defaultTo('no image')
    })
};

exports.down = function(knex) {
    return knex.schema.table('users', table => {
        table.dropColumn('imgUrl')
    })
};