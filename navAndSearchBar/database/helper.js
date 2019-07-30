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
  return Product.query(`SELECT id, name, price, category, gender, image, rating, numratings, colors, activities, materials FROM products WHERE textsearchable_index_col @@ to_tsquery('${query}') ORDER BY id DESC limit 30;`);
}

const findProductsByID = (id) => {
  return Product.query(`SELECT * FROM products WHERE id = ${id}`);
}

module.exports = {
  findProductsLike,
  findProductsByID
};