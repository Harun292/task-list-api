exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
      {
        listId: '1',
        name: 'homework',
        deadline: '05-22-2020',
        description: 'homework',
        priority: '1',
        completed: true,
      },
      ]);
    });
};
