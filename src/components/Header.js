import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div id='header'>
        <div className='flex-container'>
          <div className='header-content'>
            <h1>Treezy Web Design</h1>
            <p className='treezy-color'>Developing your ideas into reality.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
