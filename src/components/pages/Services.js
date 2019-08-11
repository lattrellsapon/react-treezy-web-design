import React, { Component } from 'react';

import OnePage from '../../images/one-page.png';
import Multipages from '../../images/multipages.png';
import Responsive from '../../images/responsive.png';
import PhoneWallpaper from '../../images/phone-wallpaper.png';

export class Services extends Component {
  render() {
    return (
      <div className='container mt-30'>
        <div className='services-header text-center'>
          <h1 className='letter-space'>Services</h1>
          <p>What I can do for you</p>
        </div>
        <div className='services-container mt-30'>
          <div className='two-grid'>
            <div className='services-img'>
              <img src={OnePage} alt='' />
            </div>
            <div className='services-blurb'>
              <div className='services-blurb-header'>
                <h3>One page website</h3>
              </div>
              <div className='services-blurb-content'>
                <p>
                  I can create a simple static website that will be more than
                  enough to showcase yourself or your products.
                </p>
              </div>
            </div>
            <div className='services-img'>
              <img src={Multipages} alt='' />
            </div>
            <div className='services-blurb'>
              <div className='services-blurb-header'>
                <h3>Multipages website</h3>
              </div>
              <div className='services-blurb-content'>
                <p>
                  I can also create a website that is more than one page. This
                  is useful for when you want to have a lot of information to
                  display and for more user interactions.
                </p>
              </div>
            </div>
            <div className='services-img'>
              <img src={Responsive} alt='' />
            </div>
            <div className='services-blurb'>
              <div className='services-blurb-header'>
                <h3>Responsive website</h3>
              </div>
              <div className='services-blurb-content'>
                <p>
                  When I start my projecs, I use the mobile-approach first
                  approach when developing. This makes my websites responsive
                  and will look good on all devices.
                </p>
              </div>
            </div>
            <div className='services-img'>
              <img src={PhoneWallpaper} alt='' />
            </div>
            <div className='services-blurb'>
              <div className='services-blurb-header'>
                <h3>Phone and Computer Wallpapers</h3>
              </div>
              <div className='services-blurb-content'>
                <p>
                  I can also provide simple and smooth wallpapers for mobile
                  phones or desktop computers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
