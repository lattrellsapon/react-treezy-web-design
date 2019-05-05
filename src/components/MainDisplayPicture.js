import React, { Component } from 'react';
import mainDP from '../images/main-dp.png';

export class MainDisplayPicture extends Component {
  render() {
    return (
      <div className="container" id="main-dp">
        <img src={mainDP} alt=""/>
      </div>
    )
  }
}

export default MainDisplayPicture;
