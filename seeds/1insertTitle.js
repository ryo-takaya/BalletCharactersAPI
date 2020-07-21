exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('titles').del()
  //   .then(function () {
  return knex("titles").insert([
    { title: "SleepingBeauty" },
    { title: "Swan Lake" },
    { title: "Dragon Quest" },
    { title: "Nut Cracker" },
    { title: "La Sylphide" },
    { title: "Don qui xote" },
  ]);
  //  });
};
