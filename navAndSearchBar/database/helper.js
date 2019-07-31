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

const Product = require('./postgres.js')

const findProductsLike = (query) => {
  /*
  Edge-cases for queries:
   - searching on 3 empty spaces.
   - a case such as 'a a a'
   - a query string with a white space at the front or end
   - if query string is absurdly too many characters
  */
  var qs = query.trim();
  if (qs.includes(' ')) {
    qs = qs.replace(new RegExp(' ', 'g'), ' & ');
  } else if (qs.includes(`'`)) {
    qs = qs.replace(new RegExp(`'`, 'g'), '');
  }
  console.log(`Attempting to query ->${qs}<-`)
  return Product.query(`SELECT id, name, price, category, gender, image, rating, numratings, colors, activities, materials FROM products WHERE textsearchable_index_col @@ to_tsquery('${qs}') ORDER BY id DESC limit 24;`);
}

const findProductsByID = (id) => {
  return Product.query(`SELECT * FROM products WHERE id = ${id}`);
}

module.exports = {
  findProductsLike,
  findProductsByID
};