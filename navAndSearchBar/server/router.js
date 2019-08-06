const router = require('express').Router();
const {search, searchByID} = require('./controllers.js');


router
  .route('/search')
  .get(search);
 
router
  .route('/search/:id')
  .get(searchByID);


module.exports = router;
