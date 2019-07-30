const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI || 'mongodb://localhost/search'

mongoose.connect(uri, {useNewUrlParser: true});

let productSchema = mongoose.Schema({
  name: String,
  price: String,
  category: String,
  gender: String,
  image: String,
  rating: Number,
  numRatings: String,
  colors: [String],
  activities: [String],
  materials: [String]
});

let Product = mongoose.model('product', productSchema);

module.exports = Product;

