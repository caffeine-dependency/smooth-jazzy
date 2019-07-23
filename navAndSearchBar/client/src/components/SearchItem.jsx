import React from 'react';



const SearchItem = ({ product }) => {
  
  if (product.numRatings) {
    var numOfRatings = product.numRatings.split('(')[1].split(')')[0] + " Reviews";
  } else {
   var numOfRatings = 0;
  }

  return (
    <div className="product">
      <img className="productImage" src={product.image}></img>
      <div className="colors">
        {product.colors.map((color, i) => (
          <div style={{ backgroundColor: color }} key={i} className="colorBlock">{color}</div>
        ))}
      </div>
      <div className="review">
        <div className="stars-container">
          {/* <img src="/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Assets/ratingEmpty.gif"></img> */}
          <div className="stars" style={{ width: product.rating + "%" }}>
            <img src="/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Assets/ratingFull.gif"></img>
          </div>
        </div>
        <span className="numReviews">{numOfRatings}</span>
      </div>
      <div className="productName">{product.name}</div>
      <div className="productPrice">{product.price}</div>
    </div>
  )
}


export default SearchItem;