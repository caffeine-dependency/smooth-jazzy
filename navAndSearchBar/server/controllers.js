const {findProductsByID, findProductsLike} = require('../database/helper.js');

const search = (req, res) => {
  findProductsLike(req.query.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
}

const searchByID = (req, res) => {
  findProductsByID(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
}


module.exports = {
  search, 
  searchByID
};