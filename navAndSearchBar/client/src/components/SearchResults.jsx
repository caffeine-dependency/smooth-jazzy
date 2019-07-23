import React from 'react';
import SearchItem from '../components/SearchItem.jsx';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        activities: [],
        colors: [],
        category: [],
        gender: [],
        materials: [],
        rating: []
      },
      products: this.props.products
    };
  }


  render() {
    var first24 = this.props.products.slice(0, 24);
    return (
      <div className="results">
        {this.props.active ?
          <div className="searchPrompt">{this.props.products.length} Results found</div>
          :
          <div className="searchPrompt"> Start Typing to Search for Products</div>}
        {first24.map((product, i) => (
          <SearchItem product={product} key={i} />
        ))}
      </div>
    )
  }
}

export default SearchResults;