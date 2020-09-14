exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('list')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('list').insert([
        {
          projectId: '1',
          name : 'math'
        },
      ]);
    });
};
