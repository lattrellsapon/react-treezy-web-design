import React, { Component } from 'react';
import OnePage from '../images/one-page.png';
import MultiplePages from '../images/multipages.png';
import Responsive from '../images/responsive.png';

export class Services extends Component {
  render() {
    return (
      <div className='container' id='services'>
        <h1 className='margin-top-bottom'>Services</h1>
        <div className='three-column-grid'>
          <div className='services-content'>
            <h3 className='margin-top-bottom'>One Page Website</h3>
            <img src={OnePage} alt='' />
          </div>
          <div className='services-content'>
            <h3 className='margin-top-bottom'>Multipage Website</h3>
            <img src={MultiplePages} alt='' />
          </div>
          <div className='services-content'>
            <h3 className='margin-top-bottom'>Responsive Website</h3>
            <img src={Responsive} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
