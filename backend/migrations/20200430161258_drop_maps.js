exports.up = function(knex) {
    return knex.schema.dropTable('maps')
};

exports.down = function(knex) {

};