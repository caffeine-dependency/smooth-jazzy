import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value.length) {
      this.props.search(e.target.value);
    }
  }

  render() {
    return (
      <div className="searchContainer">
        <input  placeholder="SEARCH" className="searchField" type="text" onChange={this.handleChange}></input>
        <i className="searchEnd fas fa-search"></i>
        <i onClick={this.props.closeSearch} className="searchClose fas fa-times"></i>
      </div>
    )
  }
}

export default SearchBar;