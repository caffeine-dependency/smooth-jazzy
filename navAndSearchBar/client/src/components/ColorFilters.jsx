import React from 'react';

class ColorFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var filter = e.target.getAttribute("name").split(" (")[0];
    var activeIndex = this.state.active.indexOf(filter);
    if (activeIndex > -1) {
      var newActives = [...this.state.active];
      newActives.splice(activeIndex, 1);
      this.setState({
        active: newActives
      }, () => {
        this.props.removeFilter(this.props.category, filter);
      });
    } else {
      this.setState({
        active: [filter, ...this.state.active]
      })
      this.props.addFilter(this.props.category, filter);
    }
  }

  render() {
    this.props.filters.sort((a, b) => this.props.counts[b] - this.props.counts[a]);
    return (
      <div className="filterList">
        {this.props.filters.map((filter, i) => {
          if (this.state.active.includes(filter)) {
            return (
              <div name={filter}
                onClick={this.handleClick}
                style={{ backgroundColor: filter }} key={i}
                className="colorFilter">
                {this.props.counts[filter] + " x"}
              </div>
            )
          } else {
            return (
              <div name={filter}
                onClick={this.handleClick}
                style={{ backgroundColor: filter }} key={i}
                className="colorFilter">
                {this.props.counts[filter]}
              </div>
            )
          }
        })}
      </div>
    )
  }
}


export default ColorFilters;