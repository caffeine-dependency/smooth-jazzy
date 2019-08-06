const config = require('./navAndSearchBar/database/credentials')
const { Pool } = require('pg');
const pool = new Pool(config);
var copyTo = require('pg-copy-streams').to;
 
pool.connect(function(err, client, done) {
  var stream = client.query(copyTo(`COPY (SELECT name, price, category, gender, image, rating, numratings, colors, activities, materials FROM products ORDER BY id ASC) TO STDOUT DELIMITER '|'`));
  stream.pipe(process.stdout);
  stream.on('end', done);
  stream.on('error', done);
});