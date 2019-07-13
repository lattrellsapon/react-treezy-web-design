import React, { Component } from 'react';

export class Technical extends Component {
  render() {
    return (
      <div className='container' id='technical-skills'>
        <h1 className='margin-top-bottom'>Technical Skills</h1>
        <div className='three-column-grid'>
          <div className='technical-content' id='html'>
            <h3>HTML</h3>
            <i class='fab fa-html5' id='skill-logo' />
          </div>
          <div className='technical-content' id='css'>
            <h3>CSS</h3>
            <i class='fab fa-css3-alt' id='skill-logo' />
          </div>
          <div className='technical-content' id='javascript'>
            <h3>JavaScript</h3>
            <i class='fab fa-js-square' id='skill-logo' />
          </div>
          <div className='technical-content' id='node-js'>
            <h3>NodeJs</h3>
            <i class='fab fa-node' id='skill-logo' />
          </div>
          <div className='technical-content' id='react-js'>
            <h3>React</h3>
            <i class='fab fa-react' id='skill-logo' />
          </div>
          <div className='technical-content' id='php'>
            <h3>PHP</h3>
            <i class='fab fa-php' id='skill-logo' />
          </div>
        </div>
      </div>
    );
  }
}

export default Technical;
