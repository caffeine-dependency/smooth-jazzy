const router = require('express').Router();
const search = require('./controllers.js');


router
  .route('/search')
  .get(search);


module.exports = router;
