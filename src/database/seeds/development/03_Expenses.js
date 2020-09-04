exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('expenses')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('expenses').insert([
        {
          name: 'Paying bills',
          user_id: '1',
          category_id: '1',
          amount: '143.50',
          description: 'Bills for electricity',
        },
        {
          name: 'Shoes',
          user_id: '2',
          category_id: '1',
          amount: '190.50',
          description: 'Bought Adidas shoes',
        },
        {
          name: 'Car repair',
          user_id: '3',
          category_id: '1',
          amount: '250',
          description: 'Car brakes changed',
        },
        {
          name: 'Haircut',
          user_id: '4',
          category_id: '1',
          amount: '10',
          description: 'Haircut done',
        },
        {
          name: 'Grocery shopping',
          user_id: '6',
          category_id: '1',
          amount: '154.50',
          description: 'Purchasing groceries',
        },
        {
          name: 'Cell phone bill',
          user_id: '5',
          category_id: '1',
          amount: '100',
          description: 'Bill for cell phone',
        },
      ]);
    });
};
