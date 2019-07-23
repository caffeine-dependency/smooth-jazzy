import React from 'react';
import paths from '../lib/dropdownData.js';

var imagePaths = paths.imagePaths;




class MensDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: imagePaths.RockSolidUsedGear,
      imageText: "Rock Solid Used Gear",
      imageEmphasis: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.imageHover = this.imageHover.bind(this);
  }

  handleHover(e) {
    var imageText = e.target.innerText;
    var imagePath = imagePaths[e.target.getAttribute('name')];
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
      <div className="dropdown">
        <ul>
          <li className="dropMenuTitle">CLOTHING</li>
          <li name="ShellJackets" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Shell Jackets</li>
          <li name="InsulatedJackets" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Insulated Jackets</li>
          <li name="Pants" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Pants</li>
          <li name="MidLayerFleece" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Mid Layer & Fleece</li>
          <li name="BaseLayer" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Base Layer</li>
          <li name="ShirtsTops" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Shirts & Tops</li>
          <li name="Shorts" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Shorts</li>
        </ul>

        <ul>
          <li className="dropMenuTitle">PACKS</li>
          <li name="Daypacks" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Daypacks</li>
          <li name="MultiDay" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Multi-day</li>
          <li name="AvalancheAirbags" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Avalanche Airbags</li>
          <li name="HydrationVests" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Hydration Vests</li>
          <li name="DuffleTotes" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Duffle & Totes</li>
          <li name="TravelBags" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Travel Bags</li>
          <li name="CommuterBags" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Commuter Bags</li>
        </ul>
        <div className="group">
          <ul>
            <li className="dropMenuTitle">FOOTWEAR</li>
            <li name="Boots" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Boots</li>
            <li name="Shoes" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Shoes</li>
            <li id="spacer" className="dropItem">&nbsp;</li>
            <li className="dropMenuTitle">CLIMBING GEAR</li>
            <li name="Harnesses" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Harnesses</li>
            <li name="RopeBags" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Rope Bags</li>
            <li name="ChalkBags" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Chalk Bags</li>
          </ul>
        </div>
        <ul>
          <li className="dropMenuTitle">ACCESSORIES</li>
          <li name="Gloves" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Gloves</li>
          <li name="ToqueBeanies" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Toque & Beanies</li>
          <li name="HatsCaps" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Hats & Caps</li>
          <li name="ProductCare" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Product Care</li>
          <li name="More" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">More...</li>
        </ul>
        <div className="divider"></div>
        <ul>
          <li className="dropMenuTitle">INTENDED USE</li>
          <li name="AlpinismClimbing" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Alpinism & Climbing</li>
          <li name="HikingTrekking" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Hiking & Trekking</li>
          <li name="SkiingSnowboarding" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Skiing & Snowboarding</li>
          <li name="TrailRunning" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Trail Running</li>
          <li name="Lifestyle" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Lifestyle</li>
          <li name="ArcteryxEssentials" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Arc'teryx Essentials</li>
        </ul>
        <div className="divider"></div>
        <ul>
          <li className="dropMenuTitle">SHOP MORE</li>
          <li name="RockSolidUsedGear" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Rock Solid Used Gear</li>
          <li name="SpringLookbook" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Spring Lookbook</li>
          <li name="NewArrivals" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">New Arrivals</li>
          <li name="ArcFavourites" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Arc' Favourites</li>
          <li name="JacketFinder" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Jacket Finder</li>
          <li name="LayeringGuide" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Layering Guide</li>
          <li name="TravelCommute" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Travel & Commute</li>
          <li name="GuidePicks" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Guide Picks</li>
          <li name="Veilance" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Veilance</li>
          <li name="GiftCard" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} className="dropItem">Gift Cards</li>
        </ul>
        {this.state.imageEmphasis ? 
        <div className="navImage">
          <img src={this.state.hovered}></img>
          <div onMouseEnter={this.imageHover} onMouseLeave={this.handleMouseLeave} className="overlay emphasis"></div>
          <span className="imageText">{this.state.imageText}</span>
        </div>
        :
        <div className="navImage">
          <img src={this.state.hovered}></img>
          <div onMouseEnter={this.imageHover} onMouseLeave={this.handleMouseLeave} className="overlay"></div>
          <div className="imageText">{this.state.imageText}</div>
        </div>
        }
      </div>
    )
  }
}

export default MensDropdown;