let express = require('express');
const knex = require('../knexbody')
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next)=> {
  const limit = req.query.limit
  if(limit === undefined){
    knex
    .select(`*`)
    .from('titles')
    .then(result =>{
      res.status(200)
      res.send({titles:result})
    })
  }else{
    knex
    .select(`*`)
    .from('titles')
    .limit(limit)
    .then(result =>{
      res.status(200)
      res.send({titles:result})
    })
  }
});

router.get('/:title/characters', (req, res, next)=> {
  const title = req.params.title
  console.log('d')

  knex
  .select('*')
  .from('characters')
  .where({title_value:title})
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
