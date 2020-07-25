exports.up = function(knex) {
    return knex.schema.createTable('topics', table => {
        table.increments('id');
        table.string("title").notNull()
        table.timestamp('createAt').notNull()
        table.integer('postiveSupports').notNull().defaultTo(0)
        table.integer('negativeSupports').notNull().defaultTo(0)
        table.integer('numerOfReplies').notNull().defaultTo(0)
        table.integer('views').notNull().defaultTo(0)
        table.integer('topicCategory').unsigned().collate('utf8_unicode_ci')
        table.foreign('topicCategory').references('id').inTable('categories')
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('topics')
};
