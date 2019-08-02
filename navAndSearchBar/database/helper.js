// const Product = require('./index.js');

// const findProductsLike = (query) => {
//   return (
//     // Product.find({ name: searchString }).sort({name : -1}).limit(30)
//     Product.find({ $text: { $search: query } }).sort( { name: -1} ).limit(30)
//   );
// }

// const findProductsByID = (id) => {
//   return (
//     Product.find({ _id: id })
//   );
// }

// *** POSTGRES ***
// client.connect(err => {
//   if (err) {
//     console.error('client conn error', err.stack)
//   } else {
//     console.log('connected client');
//   }
// })

const { Pool } = require ('pg');
const { username, password } = require('./credentials.js');
config = {
  host: 'localhost',
  database: 'search',
  port: 5432,
  user: username,
  password: password,
  max: 100,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 3000,
}
const pool = new Pool(config);


const findProductsLike = (query) => {
  /*
  Edge-cases for queries:
   - searching on 3 empty spaces.
   - a case such as 'a a a'
   - a query string with a white space at the front or end
   - if query string is absurdly too many characters
  */
  // var qs = query.trim();
  // if (qs.includes(' ')) { qs = qs.replace(new RegExp(' ', 'g'), ' & ');} 
  // else if (qs.includes(`'`)) { qs = qs.replace(new RegExp(`'`, 'g'), ''); }
  var qs = `SELECT id, name, price, category, gender, image, rating, numratings, colors, activities, materials FROM products WHERE textsearchable_index_col @@ to_tsquery('${query}') ORDER BY id DESC limit 24;`


  var result = '';
  return pool
    .connect()
    .then(client => {
      // return client.query(query)
      return client
    })
    // .then(res => {
    //   client.release();
    //   return res;
    // })
}

const findProductsByID = (id) => {
  return Product.query(`SELECT * FROM products WHERE id = ${id}`);
}

module.exports = {
  findProductsLike,
  findProductsByID,
  pool
};