import React, { Component } from 'react';
import OnePage from '../images/one-page.png';
import MultiplePages from '../images/multipages.png';
import Responsive from '../images/responsive.png';

export class Services extends Component {
  render() {
    return (
      <div className="container" id="services">
        <h1>Services</h1>
        <div className="three-column-grid">
            <div className="services-content">
                <h3>One Page Website</h3>
                <p>$50.00</p>
                <img src={OnePage} alt=""/>
            </div>
            <div className="services-content">
                <h3>Multipage Website</h3>
                <p>$20.00 per additional page</p>
                <img src={MultiplePages} alt=""/>
            </div>
            <div className="services-content">
                <h3>Responsive Website</h3>
                <p>All websites are responsive</p>
                <img src={Responsive} alt=""/>
            </div>
        </div>
      </div>
    )
  }
}

export default Services;
