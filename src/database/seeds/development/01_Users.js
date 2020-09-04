exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'harun@gmail.com',
          password: '12345',
          first_name: 'Harun',
          last_name: 'Ajkunić',
        },
        {
          email: 'marko@gmail.com',
          password: '12345',
          first_name: 'Marko',
          last_name: 'Stanić',
        },
        {
          email: 'dejan@gmail.com',
          password: '12345',
          first_name: 'Dejan',
          last_name: 'Popović',
        },
        {
          email: 'ensar@gmail.com',
          password: '12345',
          first_name: 'Ensar',
          last_name: 'Teletović',
        },
        {
          email: 'miralem@gmail.com',
          password: '12345',
          first_name: 'Miralem',
          last_name: 'Dagoja',
        },
        {
          email: 'ivan@gmail.com',
          password: '12345',
          first_name: 'Ivan',
          last_name: 'Ljubas',
        },
      ]);
    });
};
