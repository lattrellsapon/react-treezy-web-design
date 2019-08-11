import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  state = {
    isNavClicked: false
  };

  hideLinks = () => {
    if (!this.state.isNavClicked) {
      return {
        display: 'none'
      };
    }
  };

  clickBars = () => {
    this.setState({
      isNavClicked: !this.state.isNavClicked
    });
  };

  render() {
    return (
      <nav>
        <div className='flex-container'>
          <div>
            <Link to='/' className='home-button'>
              <div className='twd-logo'>
                <h1 className='letter-space'>TWD</h1>
              </div>
            </Link>
          </div>

          <div className='links'>
            <div className='bars'>
              <i className='fas fa-bars' onClick={this.clickBars} />
            </div>
            <div className='horizontal-links'>
              <ul>
                <Link to='/projects' className='item-link'>
                  PROJECTS
                </Link>
                <Link to='/services' className='item-link'>
                  SERVICES
                </Link>
                <Link to='/skills' className='item-link'>
                  SKILLS
                </Link>
                <Link to='/contactme' className='item-link'>
                  CONTACT ME
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className='list-links' style={this.hideLinks()}>
          <div className='text-center'>
            <ul>
              <Link to='/projects' className='vertical-item-link'>
                PROJECTS
              </Link>
              <Link to='/services' className='vertical-item-link'>
                SERVICES
              </Link>
              <Link to='/skills' className='vertical-item-link'>
                SKILLS
              </Link>
              <Link to='/contactme' className='vertical-item-link'>
                CONTACT ME
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
