exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          userId: '1',
          name: 'school',
          colorName: 'red'
        },
      ]);
    });
};
