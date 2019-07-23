

import React from 'react';
import FilterItems from './FilterItems.jsx';
import ColorFilters from './ColorFilters.jsx';
import ReviewFilters from './ReviewFilters.jsx';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      categories: [],
      activities: [],
      colors: [],
      materials: [],
      reviews: []
    }
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  addFilter(category, filter) {
    this.setState({
      [category]: [filter, ...this.state[category]]
    }, () => {
      var config = Object.assign({}, this.state);
      // bad naming cleanup
      config.category = config.categories;
      config.gender = config.genders;
      config.rating = config.reviews;
      delete config.categories;
      delete config.genders;
      delete config.reviews;

      this.props.filterProducts(config);
    })
  }

  removeFilter(category, filter) {

    var newFilters = [...this.state[category]];
    newFilters.splice(newFilters.indexOf(filter), 1);
    this.setState({
      [category]: newFilters
    }, () => {
      var config = Object.assign({}, this.state);

      // bad naming cleanup
      config.category = config.categories;
      config.gender = config.genders;
      config.rating = config.reviews;
      delete config.categories;
      delete config.genders;
      delete config.reviews;

      this.props.filterProducts(config);
    })
  }

  render() {
    return (
      <div className="filters">
        {Object.keys(this.props.filters).map((category, i) => (
          <div className="filterCategory" key={i}>
            {category !== "reviews" && category}
            {category === "colors" ?
              <ColorFilters
                activeFilters={this.state.config}
                addFilter={this.addFilter}
                removeFilter={this.removeFilter}
                category={category}
                filters={this.props.filters[category]}
                counts={this.props.counts}
              />
              : category === "reviews" ?
                /* <ReviewFilters
                  activeFilters={this.state.config}
                  addFilter={this.addFilter}
                  removeFilter={this.removeFilter}
                  category={category}
                  filters={this.props.filters[category]}
                  counts={this.props.counts} 
                />*/
                null
                : <FilterItems
                  activeFilters={this.state.config}
                  addFilter={this.addFilter}
                  removeFilter={this.removeFilter}
                  category={category}
                  filters={this.props.filters[category]}
                  counts={this.props.counts}
                />}
          </div>
        ))}
      </div>
    );
  }
}
export default Filters;