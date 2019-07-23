const filterMaker = (products) => {
  let genders = new Set();
  let categories = new Set();
  let activities = new Set();
  let colors = new Set();
  let reviews = new Set();
  let materials = new Set();

  for (let product of products) {
    product.activities.forEach(ele => activities.add(ele));
    product.colors.forEach(ele => colors.add(ele));
    product.materials.forEach(ele => materials.add(ele));
    genders.add(product.gender);
    categories.add(product.category);
    reviews.add(Math.round(product.rating / 10) * 10);
  }

  let genderArray = Array.from(genders);
  let categoryArray = Array.from(categories);
  let activityArray = Array.from(activities);
  let colorArray = Array.from(colors);
  let reviewArray = Array.from(reviews);
  let materialsArray = Array.from(materials);

  return {
    genders: genderArray,
    categories: categoryArray,
    activities: activityArray,
    colors: colorArray,
    materials: materialsArray,
    reviews: reviewArray
  }
}


export default filterMaker;