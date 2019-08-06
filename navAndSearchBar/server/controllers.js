const { Pool } = require('pg');
const redisClient = require('../database/redis.js')
const config = require('../database/credentials.js');
const pool = new Pool(config);



const search = (req, res) => {
  try {
    var { query } = req.query;
    redisClient.get(query, (err, data) => {
      if (err) {
        console.log('Error from redis');
      }

      if (data != null) {
        res.status(200).send(data)
      } else { // query into Postgres -- RAW
        pool.connect((err, client, release) => {
          if (err) {
            console.error('Error acquiring client', err.stack);
            res.status(405).send('Error 405: Method not allowed.');
            pool.end();
          } else {
            var qs = `SELECT id, name, price, category, gender, image, rating, numratings, colors, activities, materials FROM products WHERE textsearchable_index_col @@ to_tsquery('${query}') ORDER BY id DESC limit 24;`
            client.query(qs, (err, result) => {
              release()
              if (err) {
                console.error('Error on client query (postgres):', err.stack);
                res.status(404).send('Error 404: Result not found.');
              } 
              if (result) {
                redisClient.setex(query, 90, JSON.stringify(result.rows));
                res.status(200).send(result.rows);
              }
            })
          }
        })
      }
    })
  }
  catch (err) {
    console.error('Error:', err.stack);
    res.status(404).send('Error 404');
  }
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