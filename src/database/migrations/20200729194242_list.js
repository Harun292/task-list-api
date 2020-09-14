exports.up = function (knex) {
  return knex.schema.createTable('list', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('projectId')
      .references('project.id')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('list');
};
