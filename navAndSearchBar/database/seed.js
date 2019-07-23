const Product = require('./index.js');
const fs = require ('fs');

fs.readFile(__dirname + '/../../products.json', (err, data) => {
  var products = JSON.parse(String(data)).products;
  if (err) {
    console.log("error reading products", err);
    return;
  }

  for (var product of products) {
     Product.create(product)
       .then((result) => console.log(result))
       .catch((err) => console.errpr(err));
  }

});

