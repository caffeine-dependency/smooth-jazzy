const filter = (products = [], config = {}) => {
  let results = [];
  let pass = true;
  for (var product of products) {
    for (var key in config) {
      for (var value of config[key]) {
        if (!product[key].includes(value)) {
          pass = false;
          break;
        }
      }
      if (!pass) {
        break;
      }
    }
    if (pass) {
      results.push(product);
    }
    pass = true;
  }
  return results;
};




export default filter;


