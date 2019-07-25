const Product = require('./index.js');

const findProductsLike = (query) => {
  const searchString = new RegExp(query, `i`);
  return (
    Product.find({ name: searchString }).sort({name : -1}).limit(30)
  );
}

const findProductsByID = (id) => {
  return (
    Product.find({ _id: id })
  );
}

// db.products.insert({
//   name: "test",
//   price: "test",
//   category: "test",
//   gender: "test",
//   image: "test",
//   rating: 0,
//   numRatings: 0,
// })

module.exports = {
  findProductsLike,
  findProductsByID
};