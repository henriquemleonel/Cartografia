exports.up = function(knex) {
    return knex.schema.dropTable('pins')
};

exports.down = function(knex) {

};