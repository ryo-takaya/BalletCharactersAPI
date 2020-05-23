let express = require('express');
const knex = require('../knexbody')
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  const limit = req.query.limit
  if(limit === undefined){
    knex
    .select(`*`)
    .from('types')
    .then(result =>{
      res.status(200)
      res.send({titles:result})
    })
  }else{
    knex
    .select(`*`)
    .from('types')
    .limit(limit)
    .then(result =>{
      res.status(200)
      res.send({titles:result})
    })
  }
});

router.get('/:type/characters', (req, res, next)=> {
  const type = req.params.type
 

  knex
  .select('*')
  .from('characters')
  .where({type_value:type})
  .then(result => {
    res.status(200)
    res.send({characters:result})
  })
  .catch(err =>{
   res.status(400)
   res.send('not found character')
  })
});

module.exports = router;