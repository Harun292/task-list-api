exports.up = function (knex) {
  return knex.schema.createTable('project', table => {
    table.increments('id').primary();
    table
      .integer('userId')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.string('name').notNullable();
    table.string('colorName').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('project');
};
