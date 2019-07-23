import React from 'react';
import { TiMail } from 'react-icons/ti';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import paths from '../lib/dropdownData.js';

const explorePaths = paths.explorePaths;

class ExploreDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: explorePaths.WhoWeAre,
      imageText: "Who We Are",
      imageEmphasis: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.imageHover = this.imageHover.bind(this);
  }

  handleHover(e) {
    var imageText = e.target.innerText;
    var imagePath = explorePaths[e.target.getAttribute('name')];
    this.setState({
      hovered: imagePath,
      imageEmphasis: true,
      imageText
    })
  }


  imageHover() {
    this.setState({
      imageEmphasis:true
    })
  }

  handleMouseLeave() {
    this.setState({
      imageEmphasis: false
    })
  }

  render() {
    return (
      <div id="explore-dropdown" className="dropdown">
        <ul>
          <li className="dropMenuTitle">EXPLORE</li>
          <li onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} name="WhoWeAre" className="dropItem">Who We Are</li>
          <li onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} name="OurStory" className="dropItem">Our Story</li>
          <li onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} name="BirdBlog" className="dropItem">Bird Blog</li>
          <li onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} name="CommunityEvents" className="dropItem">Community Events</li>
          <li onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} name="Academy" className="dropItem">Arc'teryx Academy</li>
          <li onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} name="Athletes" className="dropItem">Athletes</li>
          <li onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} name="Sustainability" className="dropItem">Sustainability</li>
          <li onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} name="Naming" className="dropItem">Arc'teryx Naming Scheme</li>
        </ul>
        {this.state.imageEmphasis ? 
          <div className="navImage exploreImage">
          <img src={this.state.hovered}></img>
          <div onMouseEnter={this.imageHover} onMouseLeave={this.handleMouseLeave} className="overlay emphasis"></div>
          <span className="imageText">{this.state.imageText}</span>
        </div>
        :
        <div className="navImage exploreImage">
          <img src={this.state.hovered}></img>
          <div onMouseEnter={this.imageHover} onMouseLeave={this.handleMouseLeave} className="overlay"></div>
          <div className="imageText">{this.state.imageText}</div>
        </div>
        }
        <div className="divider"></div>
        <div className="contact">
          <p className="dropMenuTitle">BE THE FIRST TO KNOW</p>
          <p>Subscribe to receive new product releases, exclusive discount codes, invites to events and a chance to win.*</p>
          <span id="email"><TiMail /><a> SIGN UP FOR EMAILS</a></span>
          <p style={{ fontWeight: 450, cursor: "default" }}>FOLLOW US</p>
          <ul className="socials">
            <li><FaFacebookF size="20px" /></li>
            <li><FaInstagram size="20px" /></li>
            <li><FaTwitter size="20px" /></li>
            <li><FaPinterestP size="20px" /></li>
            <li><FaYoutube size="20px" /></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default ExploreDropdown;