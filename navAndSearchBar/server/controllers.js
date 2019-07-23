const find = require('../database/helper.js');

const search = (req, res) => {
  find(req.query.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
}


module.exports = search;