const Product = require('./index.js');
const fs = require ('fs');
const {Seeder} = require('mongo-seeding');

// for (var i = 1; i <= 4 ; i++ ){

//   fs.readFile(__dirname + `/../../products_${i}.json`, (err, data) => {
//     console.log('data:', data.substring(0,30));
//     var products = JSON.parse(String(data)).products;
//     if (err) {
//       console.log("error reading products", err);
//       return;
//     }
  
//     for (var product of products) {
//        Product.create(product)
//          .then((result) => console.log(result))
//          .catch((err) => console.errpr(err));
//     }
  
//   });
// }

const config = {
  database: {
    name: 'search',
  },
  dropDatabase: true,
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve('./mydb/data-import'),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  },
);

seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch(err => {
    console.log('Error', err);
  });