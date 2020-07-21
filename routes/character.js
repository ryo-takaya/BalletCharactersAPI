let express = require("express");
const knex = require("../knexbody");
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log("uuuu");
  const limit = req.query.limit;
  if (limit === undefined) {
    knex
      .select(`*`)
      .from("characters")
      .then((result) => {
        res.status(200);
        res.send({ characters: result });
      });
  } else {
    knex
      .select(`*`)
      .from("characters")
      .limit(limit)
      .then((result) => {
        res.status(200);
        res.send({ characters: result });
      });
  }
});

router.get("/:name", (req, res) => {
  const name = req.params.name;

  knex
    .select("*")
    .from("characters")
    .where({ name })
    .then((result) => {
      res.status(200);
      res.send({ characters: result });
    })
    .catch((err) => {
      res.status(400);
      res.send("not found character");
    });
});

router.post("/", (req, res) => {
  const { name, title, type } = req.body;
  console.log(name, title, type);
  knex("characters")
    .insert({
      name,
      title_value: title,
      type_value: type,
    })
    .then(() => {
      return knex.select("*").from("characters").where({
        name,
        title_value: title,
        type_value: type,
      });
    })
    .then((result) => {
      res.status(201);
      res.send({ characters: result });
    });
});

router.put("/:name", (req, res) => {
  const para = req.params.name;
  const { name, title_value, type_value } = req.body;
  knex("characters")
    .where({ name: para })
    .update({
      name,
      title_value,
      type_value,
    })
    .then(() => {
      return knex
        .select("*")
        .from("characters")
        .where({ name, title_value, type_value });
    })
    .then((result) => {
      res.status(201);
      res.send({ characters: result });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/:name", async (req, res) => {
  const para = req.params.name;

  const result = await knex
    .select("*")
    .from("characters")
    .where({ name: para })
    .catch(() => {
      res.status(404);
    });

  await knex("characters").where({ name: para }).del();
  res.status(200);
  res.send({ characters: result });
});

module.exports = router;
