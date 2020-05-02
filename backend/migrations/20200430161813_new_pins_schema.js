exports.up = function(knex) {
    exports.up = function(knex) {
        return knex.schema.createTable('pins', table => {
            // Info do Usuário
            table.increments("id")
            table.string('name').notNull() //OK
            table.string('email') //OK
            table.string('phone') //OK
            table.binary('description').notNull() //OK
            table.string('imgUrl') //OK
            table.string('linkF') //OK
            table.string('linkIG') //OK
            table.string('otherLink') //OK

            // info das Ruas
            table.integer('addressId').unsigned().references('id').inTable('categories').notNull() //ok
                // Info do Usuário
            table.integer('userId').unsigned().references('id').inTable('categories').notNull() //ok
        })
    };

    exports.down = function(knex) {
        return knex.schema.dropTable('pins')
    };
};

exports.down = function(knex) {

};