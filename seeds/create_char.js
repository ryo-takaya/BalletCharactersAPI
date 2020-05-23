
exports.seed = function(knex) {
  //Deletes ALL existing entries
  return knex('characters').del()
.then(function () {
  // Inserts seed entries
  return knex('characters').insert([
    {name: 'Odetto',title_value:'Swan Lake',type_value:'bird'},
    {name: 'Dream Mother',title_value:'Dragon Quest',type_value:'fairy'},
    {name: 'Clara',title_value:'Nut Cracker',type_value:'human'},
    {name: 'Lilac',title_value:'SleepingBeauty',type_value:'fairy'},
    {name: 'James',title_value:'La Sylphide',type_value:'human'},
    {name: 'Odile',title_value:'Swan Lake',type_value:'bird'},
    {name: 'white Knight',title_value:'Dragon Quest',type_value:'human'},
    {name: 'Sugar Prime',title_value:'Nut Cracker',type_value:'sweets'}
  ]);
});
};
