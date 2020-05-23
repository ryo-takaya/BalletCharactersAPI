
exports.up = function(knex) {
  return knex.schema.createTable('types',t=>{
    t.string('type')
    .notNullable()
    .unique()

    t.primary('type')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("types");
};
