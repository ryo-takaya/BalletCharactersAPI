
exports.up = function(knex) {
  return knex.schema.createTable('titles',(t)=>{
    

    t.string('title')
    .index()
    .primary()
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("titles");
};
