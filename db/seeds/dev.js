/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  //trucate all existing table
  await knex.raw('TRUNCATE TABLE "user" CASCADE')
  await knex.raw('TRUNCATE TABLE "channel" CASCADE')
  await knex.raw('TRUNCATE TABLE "video" CASCADE')
  // Deletes ALL existing entries
  // await knex('table_name').del()
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);
  await knex('channel').insert([
    {
      id:1,
      name:"channel1"
    },
    {
      id:2,
      name:"channel2"
    }
  ]);
  await knex('user').insert([
    {
      id:1,
      name:"user1",
      email:"user1@test.com",
      channelId:1
    },
    {
      id:2,
      name:"user2",
      email:"user2@test.com",
      channelId:2
    },
    {
      id:3,
      name:"user3",
      email:"user3@test.com"
    }
  ])

  return knex('video').insert([
    {
      id:1,
      title:"vide1ByUser1",
      channelId:1
    },
    {
      id:2,
      title:"vide2ByUser2",
      channelId:1
    },
    {
      id:3,
      title:"vide3ByUser3",
      channelId:2
    }
  ])
};
