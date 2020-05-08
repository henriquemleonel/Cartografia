exports.up = function(knex) {
    return knex.schema.createTable('pins', table => {
        // Info do Usuário
        table.increments("id")
        table.string('name').notNull() //OK
        table.string('email') //OK
        table.string('phone') //OK
            // endereço
        table.string('street') //OK
        table.string('neighborhood')
        table.integer('number')
        table.string('cep')
            // lat e long
        table.specificType('lat', 'double precision')
        table.specificType('long', 'double precision')
            // Outros  
        table.string('imgUrl') //OK
        table.string('linkF') //OK
        table.string('linkIG') //OK
        table.string('otherLink') //OK
        table.binary('description').notNull() //OK
            // Info do Usuário
        table.integer('userId').unsigned().references('id').inTable('users').notNull() //ok
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pins')
};