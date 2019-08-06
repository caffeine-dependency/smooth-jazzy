// const {findProductsByID, findProductsLike} = require('../database/helper.js');
const redis = require('redis');
const redisClient = redis.createClient();
const { Pool } = require('pg');
const config = require('../database/credentials.js');
const pool = new Pool(config);

redisClient.on('connect', (err) => {
  if (err) {
    console.log('Error connecting to redis', err.stack)
  } else {
    console.log('connected to redis');
  }
})


const search = (req, res) => {
  var { query } = req.query;

  redisClient.get(query, (err, data) => {
    if (err) {
      console.log('Error from redis:', err);
      res.status(404).send('Error querying from Redis.')
    }

    if (data != null) {
      res.status(200).send(data);
    } else {
      pool
        .connect()
        .then(client => {
          var qs = `SELECT id, name, price, category, gender, image, rating, numratings, colors, activities, materials FROM products WHERE textsearchable_index_col @@ to_tsquery('${query}') ORDER BY id DESC limit 24;`
          return client.query(qs)
            .then(res => {
              if (res) {
                client.release();
                redisClient.setex(query, 60, JSON.stringify(res.rows));
                return res;
              }
            })
            .catch(e => {
              client.release()
              console.log('Error on query:', e.stack);
            })
        })
        .then(result => {
          res.status(200).send(result.rows);
        })
        .catch((err) => res.status(404).send(err))
    }
  })
}

const searchByID = (req, res) => {
  findProductsByID(req.params.id)
    .then((result) => {
      res.status(200).send(result.rows)
    })
    .catch((err) => res.status(404).send(err))
}


module.exports = {
  search,
  searchByID
};