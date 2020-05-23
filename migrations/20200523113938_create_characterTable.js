
exports.up = function(knex) {
  return knex.schema.createTable('characters',(t)=>{
    t.increments()
    .index()
    .primary()

    t.string('name')
    .notNullable()
    .unique()

    t.string('title_value')
    .references('title')
    .inTable('titles');

    t.string('type_value')
    .references('type')
    .inTable('types');



    t.timestamp(`created_at`)
        .notNullable()
        .defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("characters");
};
