const Product = require('./index.js');

const findProductsLike = (query) => {
  const searchString = new RegExp(query, `i`);
  return (
  Product.find({name: searchString})
  );
 }

module.exports = findProductsLike;