import React, { Component } from 'react';

import htmlPic from '../../images/html.png';

export class Skills extends Component {
  render() {
    return (
      <div className='container mt-30'>
        <div className='skills-header text-center'>
          <h1 className='letter-space'>Skills</h1>
          <p>
            These are the current technologies I am currently using and are
            comfortable with.
          </p>
        </div>
        <div className='skills-container text-center'>
          <div className='three-grid mt-30'>
            <div className='skill'>
              <div className='skills-header'>
                <h3>HTML</h3>
              </div>
              <div className='skills-content treezy-green'>
                <i class='fab fa-html5' id='skill-logo' />
              </div>
            </div>

            <div className='skill'>
              <div className='skills-header'>
                <h3>CSS</h3>
              </div>
              <div className='treezy-green'>
                <i class='fab fa-css3-alt' id='skill-logo' />
              </div>
            </div>

            <div className='skill'>
              <div className='skills-header'>
                <h3>JavaScript</h3>
              </div>
              <div className='treezy-green'>
                <i class='fab fa-js-square' id='skill-logo' />
              </div>
            </div>

            <div className='skill'>
              <div className='skills-header'>
                <h3>NodeJs</h3>
              </div>
              <div className='treezy-green'>
                <i class='fab fa-node' id='skill-logo' />
              </div>
            </div>

            <div className='skill'>
              <div className='skills-header'>
                <h3>React</h3>
              </div>
              <div className='treezy-green'>
                <i class='fab fa-react' id='skill-logo' />
              </div>
            </div>

            <div className='skill'>
              <div className='skills-header'>
                <h3>MySQL</h3>
              </div>
              <div className='treezy-green'>
                <i class='fas fa-database' />
              </div>
            </div>

            <div className='skill'>
              <div className='skills-header'>
                <h3>MongoDB</h3>
              </div>
              <div className='treezy-green'>
                <i class='fas fa-database' />
              </div>
            </div>

            <div className='skill'>
              <div className='skills-header'>
                <h3>PHP</h3>
              </div>
              <div className='treezy-green'>
                <i class='fab fa-php' id='skill-logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
