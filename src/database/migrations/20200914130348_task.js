
exports.up = function(knex) {
    return knex.schema.createTable('task', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('listId')
          .references('list.id')
          .notNullable()
          .onDelete('CASCADE')
          .index();
        table.date('deadline').notNullable();
        table.string('description');
        table.boolean('completed');
        table.integer('priority');
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('task');
};
