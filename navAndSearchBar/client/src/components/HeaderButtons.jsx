import React from 'react';
import path from '../lib/path.js';




const Buttons = (props) => {
  return (
    <div className="buttons">
    {!props.searchOpen ?
      <span onClick={props.openSearch} className="searchButton">SEARCH<i className="fas fa-search glass"></i></span>
      :
      <span onClick={props.openSearch} className="searchButton on">SEARCH<i className="fas fa-search glass"></i></span>

    }  
      <i className="fas fa-shopping-cart"></i>
      <img className="flag" src={path + "/Assets/flag.png"}></img>
    </div>
  );
}


export default Buttons;