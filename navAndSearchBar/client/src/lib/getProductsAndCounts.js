import search from './search.js';
import filterMaker from './filterMaker.js';
import counter from './countInEachCategory.js';

const getProductsAndCounts = (query) => {
  return search(query)
    .then((products) => {
      let filters = filterMaker(products);
      let counts = counter(products, filters);
      return {products, filters, counts};
    })
}


export default getProductsAndCounts;