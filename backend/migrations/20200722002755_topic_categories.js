exports.up = function(knex) {
    return knex.schema.createTable('topicsCategories', table => {
        table.integer('topicId').unsigned().collate('utf8_unicode_ci')
        table.foreign('topicId').references('id').inTable('topics')
        table.integer('categoriesId').unsigned().collate('utf8_unicode_ci')
        table.foreign('categoriesId').references('id').inTable('categories')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('topicsCategories')
};
