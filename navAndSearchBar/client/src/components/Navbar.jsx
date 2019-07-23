import React from 'react';
import MensDropdown from './MensDropdown.jsx';
import WomensDropdown from './WomensDropdown.jsx';
import ExploreDropdown from './ExploreDropdown.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      showOverlay: true
    })
  }

  handleMouseExit() {
    this.setState({
      showOverlay: false
    });
  }

  render() {
    return (
      <ul className="navBar">
        <li className="navOption" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
          <a className="navOptionText" href="/c/mens">MENS</a>
          <div className="dropdown-container">
            <MensDropdown />
          </div>
        </li>
        <li className="navOption" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
          <a className="navOptionText" href="/c/mens">WOMENS</a>
          <div className="dropdown-container">
            <WomensDropdown />
          </div>
        </li>
        <li className="navOption" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
          <a className="navOptionText" href="/c/mens">EXPLORE</a>
          <div className="dropdown-container">
            <ExploreDropdown />
          </div>
        </li>
        {this.state.showOverlay && <div className="fade-content"></div>}
      </ul>

    );
  }
}

export default Navbar;