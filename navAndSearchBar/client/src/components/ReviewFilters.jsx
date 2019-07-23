import React from 'react';






class ReviewFilters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: [],
      showAll: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showLess = this.showLess.bind(this);
  }

  handleClick(e) {
    var filter = e.target.innerText.split(" (")[0];
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

  showAll() {
    this.setState({
      showAll: true
    })
  }

  showLess() {
    this.setState({
      showAll: false
    })
  }

  render() {
    if (!this.state.showAll) {
      var filters = this.props.filters.slice(0, 7);
    } else {
      var filters = this.props.filters;
    }
    filters.sort((a, b) => this.props.counts[b] - this.props.counts[a]);

    return (
      <div className="filterList">
        {filters.map((filter, i) => {
          if (this.state.active.includes(filter)) {
            return (
              <div key={i} onClick={this.handleClick} className="individualFilter activeFilter">
                <div className="stars" style={{ width: filter + "%" }}>
                  <img src="/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Assets/ratingFull.gif"></img>
                  {filter} ({this.props.counts[filter]}) <i className="removeFilter fas fa-times"></i>
                </div>
              </div>
            )
          } else {
            return (
              <div key={i} onClick={this.handleClick} className="individualFilter">
                <div className="stars" style={{ width: filter + "%" }}>
                  <img src="/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Assets/ratingFull.gif"></img>
                  {filter} ({this.props.counts[filter]})
                </div>
              </div>
            )
          }
        })}
        {this.props.filters.length > 7 ?
          this.state.showAll ?
            <div onClick={this.showLess} className="individualFilter">&lt; less</div>
            :
            <div onClick={this.showAll} className="individualFilter">&gt; more</div>
          :
          null}
      </div>
    )
  }
}

export default ReviewFilters;

