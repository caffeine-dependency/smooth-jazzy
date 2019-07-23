const countInEachCategory = (products = [], filters = {}) => {
  let counts = {}
  for (var menu in filters) {
    for (var filter of filters[menu]) {
      counts[filter] = 0;
    }
  }
  for (var product of products) {
    counts[product.gender]++;
    counts[product.category]++;
    counts[Math.round(product.rating / 10) * 10]++
    for (var color of product.colors) {
      counts[color]++;
    }
    for (var activity of product.activities) {
      counts[activity]++;
    }
    for (var material of product.materials) {
      counts[material]++;
    }
  }
  return counts;
}

export default countInEachCategory;